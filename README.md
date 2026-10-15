# Portfolio — Guilherme Rafael

Site estático (HTML + CSS + um JS pequeno). Sem build, sem dependências.

## Estrutura
```
index.html
css/style.css
js/main.js
images/    placeholders .svg (hero + work-i … work-vi)
videos/    coloque aqui os 3 vídeos
favicon.svg
```

## Trocar os placeholders

**Vídeos (I, II, III)** — salve em `videos/` com estes nomes:

| Obra | Nome novo | Arquivo antigo no repo |
|---|---|---|
| I · Henniez Study | `henniez-study.mp4` | `heritage_tonic.mp4` |
| II · Awake Mate Study | `awake-mate-study.mp4` | `artisan_botanical.mp4` |
| III · CocoFit Study | `cocofit-study.mp4` | `noir_kombucha.mp4` |

Enquanto o arquivo não existir, o poster (placeholder) aparece. Para trocar o poster, edite o atributo `poster` no `index.html`.

**Imagens (IV, V, VI)** — salve em `images/` (ex.: `work-iv.webp`) e atualize o `src` no `index.html`.
Todas as mídias originais são 16:9; o layout já espera essa proporção (`aspect-ratio` em `.media`).

**Imagem do hero** — `images/hero.svg` é opcional (4:5). Para remover, apague o bloco `<figure class="hero-media">`.

## Publicar no GitHub Pages
O repositório atual é um projeto Next.js com workflow de deploy próprio. Para usar este site:
1. Substitua o conteúdo do repositório pelos arquivos desta pasta (inclusive `.nojekyll`).
2. Apague `.github/workflows/deploy.yml`.
3. Em Settings → Pages, escolha "Deploy from a branch" → `main` / `(root)`.

## Cores
`#7D5A50` `#B4846C` `#E5B299` `#FCDEC0`, mais `--paper` (#FEF4E8) e `--ink` (#3A2621), derivados da paleta. Ficam em `:root` no `style.css`.
