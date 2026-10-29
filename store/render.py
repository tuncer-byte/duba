# Mağaza görsellerini store/mockup.html şablonundan basar.
# Kullanım: python store/render.py   (ekranlar store/raw/*.png içinde olmalı)
import asyncio, pathlib
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).parent
NAMES = ['home', 'soru', 'konular', 'konu', 'isaretler', 'premium']
SIZES = {
    'ios': (1290, 2796),      # iPhone 6,9" (App Store diğer boyutlara kendisi küçültür)
    'android': (1080, 1920),  # Google Play telefon, 16:9 (en fazla 2:1 oran)
}

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for kind, (w, h) in SIZES.items():
            out = ROOT / 'screenshots' / kind
            out.mkdir(parents=True, exist_ok=True)
            pg = await b.new_page(viewport={'width': w, 'height': h}, device_scale_factor=1)
            for i, name in enumerate(NAMES):
                await pg.goto(f'{(ROOT / "mockup.html").as_uri()}?i={i}&w={w}&h={h}')
                await pg.evaluate('document.fonts.ready')
                await pg.wait_for_load_state('networkidle')
                await pg.screenshot(path=str(out / f'{i + 1:02d}-{name}.png'))
            await pg.close()
        await b.close()

asyncio.run(main())
