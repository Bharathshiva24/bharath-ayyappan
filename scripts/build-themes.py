"""Generates src/styles/themes.css and src/theme/themes.json from the 12 theme specs.
Every text colour is checked (and nudged if needed) to reach WCAG AA on every surface."""
import json, re, os
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def h2r(h): h=h.lstrip('#'); return [int(h[i:i+2],16) for i in (0,2,4)]
def r2h(c): return '#'+''.join(f'{max(0,min(255,round(x))):02x}' for x in c)
def lum(h):
    c=[x/255 for x in h2r(h)]; c=[x/12.92 if x<=0.03928 else ((x+0.055)/1.055)**2.4 for x in c]
    return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]
def cr(a,b):
    x,y=sorted([lum(a),lum(b)],reverse=True); return (x+.05)/(y+.05)
def mix(a,b,t): A,B=h2r(a),h2r(b); return r2h([A[i]+(B[i]-A[i])*t for i in range(3)])
def ensure(c, grounds, target, toward):
    t=0
    while min(cr(c,g) for g in grounds)<target and t<1:
        t+=0.02; c=mix(c,toward,0.02/(1-t+0.02))
    return c

SPECS=[
 dict(id='directors',name="Director's Cut",tag='Tungsten light on a dark set',
  dark=dict(bg='#0a0a0b',surface='#121214',raised='#1a1a1d',ink='#f3efe7',accent='#ffb03a'),
  light=dict(bg='#f4f1ea',surface='#fbf9f4',raised='#ffffff',ink='#141312',accent='#ffb03a'),
  fonts=('Bricolage Grotesque','Geist','Geist Mono'),
  style=dict(dw=700,dt='-0.045em',dc='none',ds='normal',r0='0px',rs='2px',rm='6px',rp='999px',bw='1px',bs='solid',
   card='1px solid var(--line)',shadow='none',btnc='none',btnt='0',btnw=500,btnshadow='none',filter='none',cols=3,vcols=4,align='left',head='split',noise=0.07,rays=True,glass=False)),
 dict(id='noir',name='Noir',tag='Black, white and one red light',
  dark=dict(bg='#000000',surface='#0b0b0b',raised='#141414',ink='#ffffff',accent='#e5383b'),
  light=dict(bg='#ffffff',surface='#f4f4f4',raised='#ffffff',ink='#000000',accent='#d62828'),
  fonts=('Playfair Display','Inter','JetBrains Mono'),
  style=dict(dw=800,dt='-0.02em',dc='none',ds='italic',r0='0px',rs='0px',rm='0px',rp='0px',bw='1px',bs='solid',
   card='1px solid var(--line-control)',shadow='none',btnc='uppercase',btnt='0.14em',btnw=600,btnshadow='none',filter='grayscale(1) contrast(1.08)',cols=2,vcols=4,align='left',head='split',noise=0.12,rays=True,glass=False)),
 dict(id='neon',name='Neon Arcade',tag='Synthwave glow after midnight',
  dark=dict(bg='#0d0221',surface='#150734',raised='#1f0b47',ink='#f8f0ff',accent='#ff2bd6'),
  light=dict(bg='#fdf4ff',surface='#fff8ff',raised='#ffffff',ink='#1a0533',accent='#ff2bd6'),
  fonts=('Unbounded','Space Grotesk','JetBrains Mono'),
  style=dict(dw=700,dt='-0.01em',dc='uppercase',ds='normal',r0='14px',rs='10px',rm='12px',rp='999px',bw='1px',bs='solid',
   card='1px solid var(--tungsten-soft)',shadow='0 0 0 1px var(--tungsten-soft), 0 18px 50px -22px var(--tungsten)',btnc='uppercase',btnt='0.08em',btnw=600,btnshadow='0 0 24px -6px var(--tungsten)',filter='saturate(1.15)',cols=3,vcols=4,align='center',head='stack',noise=0.04,rays=True,glass=False)),
 dict(id='editorial',name='Editorial',tag='Long-read magazine on warm paper',
  dark=dict(bg='#1c1a17',surface='#22201c',raised='#2a2722',ink='#efe6d6',accent='#ff7a63'),
  light=dict(bg='#f3ecdf',surface='#f8f3ea',raised='#fffdf8',ink='#1d1a16',accent='#c0392b'),
  fonts=('Fraunces','Newsreader','IBM Plex Mono'),
  style=dict(dw=600,dt='-0.025em',dc='none',ds='normal',r0='0px',rs='0px',rm='2px',rp='0px',bw='1px',bs='solid',
   card='0 solid transparent',shadow='none',btnc='none',btnt='0',btnw=500,btnshadow='none',filter='sepia(0.12)',cols=2,vcols=2,align='center',head='stack',noise=0.05,rays=False,glass=False,cardbg='transparent',cardrule=True)),
 dict(id='bauhaus',name='Bauhaus',tag='Primary colours, hard geometry',
  dark=dict(bg='#111111',surface='#1b1b1b',raised='#232323',ink='#f2f0e8',accent='#f4c430'),
  light=dict(bg='#f2efe6',surface='#ffffff',raised='#ffffff',ink='#111111',accent='#e63322'),
  fonts=('Archivo Black','Archivo','Space Mono'),
  style=dict(dw=400,dt='-0.02em',dc='uppercase',ds='normal',r0='0px',rs='0px',rm='0px',rp='999px',bw='3px',bs='solid',
   card='3px solid var(--ink)',shadow='none',btnc='uppercase',btnt='0.04em',btnw=700,btnshadow='none',filter='none',cols=3,vcols=4,align='left',head='split',noise=0,rays=False,glass=False)),
 dict(id='brutalist',name='Brutalist',tag='Raw borders, loud yellow, no apologies',
  dark=dict(bg='#141414',surface='#1c1c1c',raised='#242424',ink='#ffffff',accent='#ffe600'),
  light=dict(bg='#ffffff',surface='#ffffff',raised='#ffffff',ink='#000000',accent='#ffe600'),
  fonts=('Space Grotesk','Space Grotesk','Space Mono'),
  style=dict(dw=700,dt='-0.04em',dc='uppercase',ds='normal',r0='0px',rs='0px',rm='0px',rp='0px',bw='2px',bs='solid',
   card='2px solid var(--ink)',shadow='8px 8px 0 var(--ink)',btnc='uppercase',btnt='0.06em',btnw=700,btnshadow='4px 4px 0 var(--ink)',filter='none',cols=2,vcols=2,align='left',head='stack',noise=0,rays=False,glass=False)),
 dict(id='botanica',name='Botanica',tag='Greenhouse calm, soft and rounded',
  dark=dict(bg='#0f1a14',surface='#14221a',raised='#1b2c22',ink='#e8efe6',accent='#9bd28f'),
  light=dict(bg='#eef2ea',surface='#f6f8f3',raised='#ffffff',ink='#13241a',accent='#3f8a4c'),
  fonts=('DM Serif Display','DM Sans','IBM Plex Mono'),
  style=dict(dw=400,dt='-0.01em',dc='none',ds='normal',r0='24px',rs='999px',rm='16px',rp='999px',bw='1px',bs='solid',
   card='1px solid var(--line)',shadow='0 30px 60px -40px rgba(0,0,0,.45)',btnc='none',btnt='0',btnw=500,btnshadow='none',filter='none',cols=3,vcols=4,align='left',head='split',noise=0.03,rays=True,glass=False)),
 dict(id='oceanic',name='Oceanic',tag='Deep water and frosted glass',
  dark=dict(bg='#061826',surface='#0a2133',raised='#0f2b42',ink='#e6f4f8',accent='#2ad1c9'),
  light=dict(bg='#eaf5f8',surface='#f5fbfc',raised='#ffffff',ink='#062033',accent='#14a39d'),
  fonts=('Sora','Manrope','JetBrains Mono'),
  style=dict(dw=700,dt='-0.035em',dc='none',ds='normal',r0='20px',rs='12px',rm='14px',rp='999px',bw='1px',bs='solid',
   card='1px solid var(--line)',shadow='0 24px 60px -30px rgba(0,0,0,.5)',btnc='none',btnt='0',btnw=600,btnshadow='none',filter='none',cols=3,vcols=4,align='center',head='stack',noise=0.03,rays=True,glass=True)),
 dict(id='terminal',name='Terminal',tag='Phosphor green on a CRT',
  dark=dict(bg='#050805',surface='#0a110a',raised='#0f180f',ink='#c8ffc8',accent='#39ff14'),
  light=dict(bg='#eef5ea',surface='#f6fbf3',raised='#ffffff',ink='#0c1f0c',accent='#1fa31f'),
  fonts=('JetBrains Mono','JetBrains Mono','JetBrains Mono'),
  style=dict(dw=700,dt='-0.05em',dc='none',ds='normal',r0='0px',rs='0px',rm='0px',rp='0px',bw='1px',bs='dashed',
   card='1px dashed var(--tungsten-text)',shadow='none',btnc='lowercase',btnt='0',btnw=600,btnshadow='none',filter='none',cols=2,vcols=4,align='left',head='stack',noise=0.1,rays=False,glass=False)),
 dict(id='sakura',name='Sakura',tag='Blossom pink, gentle and airy',
  dark=dict(bg='#1d1418',surface='#251a1f',raised='#2e2127',ink='#fbeef2',accent='#ff8fb1'),
  light=dict(bg='#fff4f6',surface='#fffafb',raised='#ffffff',ink='#2a1219',accent='#e0457b'),
  fonts=('Cormorant Garamond','Outfit','IBM Plex Mono'),
  style=dict(dw=600,dt='-0.02em',dc='none',ds='italic',r0='28px',rs='999px',rm='18px',rp='999px',bw='1px',bs='solid',
   card='1px solid var(--line)',shadow='0 30px 70px -45px var(--tungsten)',btnc='none',btnt='0',btnw=500,btnshadow='none',filter='none',cols=3,vcols=4,align='center',head='stack',noise=0.03,rays=True,glass=False)),
 dict(id='terracotta',name='Terracotta',tag='Sun-baked clay and desert dusk',
  dark=dict(bg='#1a120d',surface='#221813',raised='#2b1f18',ink='#f6eadf',accent='#e2725b'),
  light=dict(bg='#f6eee4',surface='#fbf6ef',raised='#ffffff',ink='#2a1a10',accent='#c4532f'),
  fonts=('Syne','Archivo','Space Mono'),
  style=dict(dw=800,dt='-0.03em',dc='none',ds='normal',r0='8px',rs='4px',rm='8px',rp='999px',bw='1px',bs='solid',
   card='1px solid var(--line)',shadow='none',btnc='uppercase',btnt='0.08em',btnw=700,btnshadow='none',filter='sepia(0.18) saturate(1.05)',cols=2,vcols=4,align='left',head='split',noise=0.06,rays=True,glass=False)),
 dict(id='aurora',name='Aurora',tag='Night sky, lilac and frost',
  dark=dict(bg='#0e0c1a',surface='#151227',raised='#1d1934',ink='#ece9ff',accent='#a796ff'),
  light=dict(bg='#f3f1ff',surface='#faf9ff',raised='#ffffff',ink='#16122e',accent='#6a55e8'),
  fonts=('Manrope','Inter','Geist Mono'),
  style=dict(dw=800,dt='-0.05em',dc='none',ds='normal',r0='16px',rs='10px',rm='12px',rp='999px',bw='1px',bs='solid',
   card='1px solid var(--line)',shadow='0 24px 60px -30px rgba(0,0,0,.55)',btnc='none',btnt='0',btnw=600,btnshadow='none',filter='none',cols=3,vcols=4,align='center',head='stack',noise=0.03,rays=True,glass=True)),
]

def palette(p, mode):
    bg,s,r,ink,acc=p['bg'],p['surface'],p['raised'],p['ink'],p['accent']
    G=[bg,s,r]
    out=dict(bg=bg,surface=s,**{'surface-raised':r},ink=ink)
    out['screen']=mix(bg,'#000000',0.45) if mode=='dark' else mix(ink,'#000000',0.1)
    out['line']=mix(bg,ink,0.13 if mode=='dark' else 0.16)
    out['line-control']=ensure(mix(bg,ink,0.38),G,3.05,ink)
    out['ink-muted']=ensure(mix(ink,bg,0.32),G,6.0,ink)
    out['ink-faint']=ensure(mix(ink,bg,0.45),G,4.6,ink)
    out['tungsten']=acc
    on='#000000' if cr(acc,'#000000')>=cr(acc,'#ffffff') else '#ffffff'
    on=mix(on, ink if (lum(ink)<.5)==(on=='#000000') else on, 0.0)
    out['on-tungsten']=on
    if cr(acc,on)<4.5: raise SystemExit(f'{p} accent fails with on-colour')
    out['tungsten-text']=ensure(acc,G,4.6,ink)
    out['tungsten-soft']=mix(bg,acc,0.2 if mode=='dark' else 0.22)
    assert cr(ink,out['tungsten-soft'])>=4.5
    sl='#ff6a4d' if mode=='dark' else '#c0392b'; ph='#62d68f' if mode=='dark' else '#1b7a43'
    out['safelight']=ensure(sl,G,3.0,ink); out['phosphor']=ensure(ph,G,3.0,ink)
    # report
    checks={k:round(min(cr(out[k],g) for g in G),2) for k in ('ink','ink-muted','ink-faint','tungsten-text')}
    checks['on-tungsten']=round(cr(acc,on),2); checks['line-control']=round(min(cr(out['line-control'],g) for g in G),2)
    return out,checks

FONT_Q={'Bricolage Grotesque':'Bricolage+Grotesque:opsz,wght@12..96,400..800','Geist':'Geist:wght@400..700','Geist Mono':'Geist+Mono:wght@400..600',
 'Playfair Display':'Playfair+Display:ital,wght@0,600..900;1,600..900','Inter':'Inter:wght@400..700','JetBrains Mono':'JetBrains+Mono:wght@400..800',
 'Unbounded':'Unbounded:wght@500..800','Space Grotesk':'Space+Grotesk:wght@400..700','Fraunces':'Fraunces:opsz,wght@9..144,400..800',
 'Newsreader':'Newsreader:opsz,wght@6..72,400..600','IBM Plex Mono':'IBM+Plex+Mono:wght@400;500;600','Archivo Black':'Archivo+Black',
 'Archivo':'Archivo:wght@400..700','Space Mono':'Space+Mono:wght@400;700','DM Serif Display':'DM+Serif+Display','DM Sans':'DM+Sans:opsz,wght@9..40,400..700',
 'Sora':'Sora:wght@400..800','Manrope':'Manrope:wght@400..800','Cormorant Garamond':'Cormorant+Garamond:ital,wght@0,500..700;1,500..700',
 'Outfit':'Outfit:wght@400..700','Syne':'Syne:wght@500..800','Atkinson Hyperlegible':'Atkinson+Hyperlegible:wght@400;700'}
FALL={'display':'system-ui, sans-serif','sans':'system-ui, -apple-system, "Segoe UI", sans-serif','mono':'ui-monospace, Menlo, monospace'}
SERIF={'Playfair Display','Fraunces','Newsreader','DM Serif Display','Cormorant Garamond'}
def stack(f,kind):
    fb='Georgia, "Times New Roman", serif' if f in SERIF else FALL[kind]
    return f'"{f}", {fb}'

css=['/* GENERATED by scripts/build-themes.py — do not edit by hand. */', ':root { --ts: 1; } [data-skin] { --focus-ring: 0 0 0 2px var(--bg), 0 0 0 4px var(--tungsten-text); }']
meta=[]; report=[]
for t in SPECS:
    st=t['style']; d,s,m=t['fonts']
    tok={'font-display':stack(d,'display'),'font-sans':stack(s,'sans'),'font-mono':stack(m,'mono'),
     'display-weight':st['dw'],'display-tracking':st['dt'],'display-case':st['dc'],'display-style':st['ds'],
     'radius-0':st['r0'],'radius-sm':st['rs'],'radius-md':st['rm'],'radius-pill':st['rp'],'border-w':st['bw'],'border-style':st['bs'],
     'card-border':st['card'],'card-shadow':st['shadow'],'card-bg':st.get('cardbg','var(--surface)'),'btn-case':st['btnc'],'btn-tracking':st['btnt'],'btn-weight':st['btnw'],'btn-shadow':st['btnshadow'],
     'media-filter':st['filter'],'work-cols':st['cols'],'visual-cols':st['vcols'],'hero-align':st['align'],'hero-indent':'auto' if st['align']=='center' else '0','hero-justify':'center' if st['align']=='center' else 'space-between','slate-justify':'center' if st['align']=='center' else 'flex-start',
     'head-cols':'1fr' if st['head']=='stack' else '1fr minmax(0, 420px)','card-rule':'1px solid var(--ink)' if st.get('cardrule') else '0 solid transparent',
     'glass':'blur(18px) saturate(1.3)' if st['glass'] else 'none','card-alpha':'72%' if st['glass'] else '100%'}
    css.append(f'[data-skin="{t["id"]}"] {{'+' '.join(f'--{k}: {v};' for k,v in tok.items())+'}')
    pals={}
    for mode in ('dark','light'):
        pal,chk=palette(t[mode],mode); pals[mode]=pal; report.append((t['id'],mode,chk))
        css.append(f'[data-skin="{t["id"]}"][data-theme="{mode}"] {{'+' '.join(f'--{k}: {v};' for k,v in pal.items())+f' color-scheme: {mode};}}')
    meta.append(dict(id=t['id'],name=t['name'],tag=t['tag'],fonts=dict(display=d,sans=s,mono=m),noise=st['noise'],rays=st['rays'],palettes=pals))
fams=sorted({f for t in SPECS for f in t['fonts']}|{'Atkinson Hyperlegible'})
url='https://fonts.googleapis.com/css2?'+'&'.join('family='+FONT_Q[f] for f in fams)+'&display=swap'
open(os.path.join(ROOT,'src/styles/themes.css'),'w').write('\n'.join(css)+'\n')
json.dump(dict(fontsUrl=url,themes=meta),open(os.path.join(ROOT,'src/theme/themes.json'),'w'),indent=1)
for r in report: print(*r)
print(len(url),'chars font url')
