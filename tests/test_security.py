"""Lightweight isolated smoke tests; no live Discord/Postgres required."""
import importlib.util
from pathlib import Path
from unittest.mock import patch

p = Path(__file__).resolve().parents[1] / 'server' / 'app.py'
spec = importlib.util.spec_from_file_location('vivian_web_app', p)
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)


def test_protected_profile():
    with m.app.test_client() as c:
        with patch.object(m, 'rate_limit', return_value=True):
            resp = c.get('/api/me')
        assert resp.status_code == 401


def test_auth_without_config():
    with m.app.test_client() as c:
        with patch.object(m, 'rate_limit', return_value=True):
            with patch.object(m, 'CLIENT_ID', ''):
                resp = c.get('/auth/discord')
        assert resp.status_code == 503


def test_logout_origin_required():
    with m.app.test_client() as c:
        with patch.object(m, 'rate_limit', return_value=True):
            resp = c.post('/auth/logout', headers={'Origin': 'https://evil.example'})
        assert resp.status_code == 403


def test_rate_limit():
    with m.app.test_client() as c:
        with patch.object(m, 'rate_limit', return_value=False):
            resp = c.get('/api/me')
        assert resp.status_code == 429


if __name__ == '__main__':
    test_protected_profile()
    test_auth_without_config()
    test_logout_origin_required()
    test_rate_limit()
    print('4 smoke tests passed')
