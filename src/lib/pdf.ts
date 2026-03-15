/** Theme page backgrounds (hex gradients for PDF). */
const PDF_PAGE_BG: Record<string, string> = {
  emerald: "linear-gradient(160deg, #064e3b 0%, #065f46 20%, #047857 40%, #059669 60%, #065f46 80%, #1e3a5f 100%)",
  navy: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 30%, #1e40af 60%, #1e3a5f 80%, #0f172a 100%)",
  rose: "linear-gradient(160deg, #4c0519 0%, #881337 25%, #be123c 50%, #9f1239 75%, #4c0519 100%)",
  midnight: "linear-gradient(160deg, #09090b 0%, #18181b 30%, #27272a 50%, #18181b 80%, #09090b 100%)",
  golden: "linear-gradient(160deg, #78350f 0%, #92400e 25%, #b45309 50%, #92400e 75%, #78350f 100%)",
};

/** Theme-specific hex colors for PDF (html2canvas can't parse oklab). */
const PDF_THEME_STYLES: Record<string, string> = {
  emerald: `
    [data-theme="emerald"] svg{fill:#d97706!important;stroke:#d97706!important}
    [data-theme="emerald"]>div{background:rgba(255,255,255,0.98)!important;border:1px solid rgba(209,250,229,0.6)!important;box-shadow:0 25px 50px -12px rgba(0,0,0,0.2),0 0 0 1px rgba(255,255,255,0.5) inset;padding:2rem!important}
    [data-theme="emerald"]>div>div:nth-child(1){background:linear-gradient(to bottom left,rgba(251,191,36,0.12),transparent)!important}
    [data-theme="emerald"]>div>div:nth-child(2){background:linear-gradient(to top right,rgba(52,211,153,0.12),transparent)!important}
    [data-theme="emerald"] h1{background:linear-gradient(to right,#047857,#059669,#d97706)!important;-webkit-background-clip:text;background-clip:text;color:transparent!important}
    [data-theme="emerald"] .text-emerald-600\\/60{color:rgba(5,150,105,0.6)!important}
    [data-theme="emerald"] .text-amber-600{color:#d97706!important}
    [data-theme="emerald"] .text-gray-700{color:#374151!important}
    [data-theme="emerald"] .text-emerald-700{color:#047857!important}
    [data-theme="emerald"] .via-emerald-300\\/50{background:linear-gradient(to right,transparent,rgba(110,231,183,0.5),transparent)!important}
    [data-theme="emerald"] .border-current\\/10{border-color:rgba(5,150,105,0.15)!important}
    [data-theme="emerald"] [class*="bg-amber-50"]{background:rgba(255,251,235,0.9)!important;border:1px solid rgba(253,230,138,0.5)!important}
    [data-theme="emerald"] [class*="text-amber-700"]{color:#b45309!important}
    [data-theme="emerald"] [class*="text-amber-600"]{color:#d97706!important}
    [data-theme="emerald"] [class*="text-amber-800"]{color:#92400e!important}
  `,
  navy: `
    [data-theme="navy"] svg{fill:#d97706!important;stroke:#d97706!important}
    [data-theme="navy"]>div{background:rgba(255,255,255,0.98)!important;border:1px solid rgba(219,234,254,0.6)!important;box-shadow:0 25px 50px -12px rgba(0,0,0,0.2),0 0 0 1px rgba(255,255,255,0.5) inset;padding:2rem!important}
    [data-theme="navy"]>div>div:nth-child(1){background:linear-gradient(to bottom left,rgba(251,191,36,0.12),transparent)!important}
    [data-theme="navy"]>div>div:nth-child(2){background:linear-gradient(to top right,rgba(96,165,250,0.12),transparent)!important}
    [data-theme="navy"] h1{background:linear-gradient(to right,#1e40af,#2563eb,#f59e0b)!important;-webkit-background-clip:text;background-clip:text;color:transparent!important}
    [data-theme="navy"] .text-blue-600\\/60{color:rgba(37,99,235,0.6)!important}
    [data-theme="navy"] .text-amber-600{color:#d97706!important}
    [data-theme="navy"] .text-gray-700{color:#374151!important}
    [data-theme="navy"] .text-blue-800{color:#1e40af!important}
    [data-theme="navy"] .via-blue-300\\/50{background:linear-gradient(to right,transparent,rgba(147,197,253,0.5),transparent)!important}
    [data-theme="navy"] .border-current\\/10{border-color:rgba(30,64,175,0.15)!important}
    [data-theme="navy"] [class*="bg-blue-50"]{background:rgba(239,246,255,0.9)!important;border:1px solid rgba(191,219,254,0.5)!important}
    [data-theme="navy"] [class*="text-blue-700"]{color:#1d4ed8!important}
    [data-theme="navy"] [class*="text-blue-600"]{color:#2563eb!important}
    [data-theme="navy"] [class*="text-blue-900"]{color:#1e3a8a!important}
  `,
  rose: `
    [data-theme="rose"] svg{fill:#f472b6!important;stroke:#f472b6!important}
    [data-theme="rose"]>div{background:rgba(255,255,255,0.98)!important;border:1px solid rgba(255,228,230,0.6)!important;box-shadow:0 25px 50px -12px rgba(0,0,0,0.2),0 0 0 1px rgba(255,255,255,0.5) inset;padding:2rem!important}
    [data-theme="rose"]>div>div:nth-child(1){background:linear-gradient(to bottom left,rgba(253,164,175,0.2),transparent)!important}
    [data-theme="rose"]>div>div:nth-child(2){background:linear-gradient(to top right,rgba(253,164,175,0.2),transparent)!important}
    [data-theme="rose"] h1{background:linear-gradient(to right,#be123c,#e11d48,#f472b6)!important;-webkit-background-clip:text;background-clip:text;color:transparent!important}
    [data-theme="rose"] .text-rose-500\\/60{color:rgba(244,63,94,0.6)!important}
    [data-theme="rose"] .text-rose-500{color:#f43f5e!important}
    [data-theme="rose"] .text-gray-700{color:#374151!important}
    [data-theme="rose"] .text-rose-700{color:#be123c!important}
    [data-theme="rose"] .via-rose-300\\/50{background:linear-gradient(to right,transparent,rgba(253,164,175,0.5),transparent)!important}
    [data-theme="rose"] .border-current\\/10{border-color:rgba(190,18,60,0.15)!important}
    [data-theme="rose"] [class*="bg-rose-50"]{background:rgba(255,241,242,0.9)!important;border:1px solid rgba(253,164,175,0.5)!important}
    [data-theme="rose"] [class*="text-rose-700"]{color:#be123c!important}
    [data-theme="rose"] [class*="text-rose-600"]{color:#e11d48!important}
    [data-theme="rose"] [class*="text-rose-900"]{color:#881337!important}
  `,
  midnight: `
    [data-theme="midnight"] svg{fill:#fbbf24!important;stroke:#fbbf24!important}
    [data-theme="midnight"]>div{background:rgba(24,24,27,0.98)!important;border:1px solid rgba(245,158,11,0.3)!important;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5),0 0 0 1px rgba(251,191,36,0.1) inset;padding:2rem!important}
    [data-theme="midnight"]>div>div:nth-child(1){background:linear-gradient(to bottom left,rgba(245,158,11,0.12),transparent)!important}
    [data-theme="midnight"]>div>div:nth-child(2){background:linear-gradient(to top right,rgba(217,119,6,0.08),transparent)!important}
    [data-theme="midnight"] h1{background:linear-gradient(to right,#fbbf24,#fde047,#f59e0b)!important;-webkit-background-clip:text;background-clip:text;color:transparent!important}
    [data-theme="midnight"] .text-amber-400\\/60{color:rgba(251,191,36,0.6)!important}
    [data-theme="midnight"] .text-amber-400{color:#fbbf24!important}
    [data-theme="midnight"] .text-zinc-300{color:#d4d4d8!important}
    [data-theme="midnight"] .via-amber-500\\/30{background:linear-gradient(to right,transparent,rgba(245,158,11,0.3),transparent)!important}
    [data-theme="midnight"] .border-current\\/10{border-color:rgba(251,191,36,0.2)!important}
    [data-theme="midnight"] [class*="bg-amber-500"]{background:rgba(245,158,11,0.12)!important;border:1px solid rgba(245,158,11,0.25)!important}
    [data-theme="midnight"] [class*="text-amber-400"]{color:#fbbf24!important}
    [data-theme="midnight"] [class*="text-amber-300"]{color:#fcd34d!important}
    [data-theme="midnight"] button{border-color:rgba(245,158,11,0.3)!important;background:rgba(245,158,11,0.12)!important;color:#fcd34d!important}
  `,
  golden: `
    [data-theme="golden"] svg{fill:#d97706!important;stroke:#d97706!important}
    [data-theme="golden"]>div{background:rgba(255,255,255,0.98)!important;border:1px solid rgba(253,230,138,0.6)!important;box-shadow:0 25px 50px -12px rgba(0,0,0,0.2),0 0 0 1px rgba(255,255,255,0.5) inset;padding:2rem!important}
    [data-theme="golden"]>div>div:nth-child(1){background:linear-gradient(to bottom left,rgba(253,224,71,0.18),transparent)!important}
    [data-theme="golden"]>div>div:nth-child(2){background:linear-gradient(to top right,rgba(253,224,71,0.12),transparent)!important}
    [data-theme="golden"] h1{background:linear-gradient(to right,#b45309,#d97706,#eab308)!important;-webkit-background-clip:text;background-clip:text;color:transparent!important}
    [data-theme="golden"] .text-amber-600\\/60{color:rgba(217,119,6,0.6)!important}
    [data-theme="golden"] .text-amber-600{color:#d97706!important}
    [data-theme="golden"] .text-gray-700{color:#374151!important}
    [data-theme="golden"] .text-amber-700{color:#b45309!important}
    [data-theme="golden"] .via-amber-300\\/50{background:linear-gradient(to right,transparent,rgba(253,230,138,0.5),transparent)!important}
    [data-theme="golden"] .border-current\\/10{border-color:rgba(180,83,9,0.15)!important}
    [data-theme="golden"] [class*="bg-amber-50"]{background:rgba(255,251,235,0.9)!important;border:1px solid rgba(253,230,138,0.5)!important}
    [data-theme="golden"] [class*="text-amber-700"]{color:#b45309!important}
    [data-theme="golden"] [class*="text-amber-600"]{color:#d97706!important}
    [data-theme="golden"] [class*="text-amber-800"]{color:#92400e!important}
  `,
};

function getPdfFallbackStyles(theme: string): string {
  const themeStyles = PDF_THEME_STYLES[theme] || PDF_THEME_STYLES.emerald;
  return `
    *,*::before,*::after{box-sizing:border-box}
    .flex{display:flex}.flex-col{flex-direction:column}.items-center{align-items:center}
    .justify-between{justify-content:space-between}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}
    .inline-flex{display:inline-flex}
    .relative{position:relative}.absolute{position:absolute}
    .overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.rounded-xl{border-radius:0.75rem}
    .rounded-bl-full{border-bottom-left-radius:9999px}.rounded-tr-full{border-top-right-radius:9999px}
    .p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-4{padding:1rem}
    .mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-6{margin-bottom:1.5rem}
    .mt-6{margin-top:1.5rem}.pt-6{padding-top:1.5rem}
    .text-center{text-align:center}.text-right{text-align:right}
    .text-xs{font-size:0.75rem}.text-sm{font-size:0.875rem}.text-base{font-size:1rem}
    .text-lg{font-size:1.125rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-4xl{font-size:2.25rem}
    .font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}
    .leading-relaxed{line-height:1.625}.whitespace-pre-line{white-space:pre-line}
    .w-32{width:8rem}.w-24{width:6rem}.h-32{height:8rem}.h-24{height:6rem}
    .w-full{width:100%}.h-px{height:1px}.flex-1{flex:1}
    .top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}
    .top-4{top:1rem}.right-4{right:1rem}.z-10{z-index:10}
    .border{border-width:1px}.border-t{border-top-width:1px}
    .uppercase{text-transform:uppercase}.tracking-wider{letter-spacing:0.05em}
    .tracking-\\[0\\.2em\\]{letter-spacing:0.2em}.font-mono{font-family:ui-monospace,monospace}
    button{display:inline-flex;align-items:center;justify-content:center;gap:0.25rem;border:1px solid rgba(180,83,9,0.3);border-radius:0.5rem;padding:0.25rem 0.5rem;font-size:0.75rem;font-weight:500;background:rgba(255,251,235,0.95);color:#b45309}
    .min-h-screen{min-height:100vh}
    ${themeStyles}
  `;
}

export async function downloadElementAsPdf(
  element: HTMLElement,
  filename = "eid-card.pdf"
): Promise<boolean> {
  try {
    // Dynamic import - html2canvas and jsPDF access window/document
    const [html2canvasModule, jspdfModule] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);
    const html2canvas = html2canvasModule.default;
    const jsPDF = jspdfModule.default;

    // Wait for fonts to load so text renders correctly
    if (typeof document !== "undefined" && document.fonts?.ready) {
      await document.fonts.ready;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      allowTaint: false,
      // SVGs are replaced with Unicode in onclone; no need to ignore
      ignoreElements: () => false,
      onclone: (clonedDoc, clonedElement) => {
        clonedElement.style.backdropFilter = "none";
        // html2canvas doesn't support oklab/oklch (Tailwind v4 uses these).
        const replaceOklab = (css: string) =>
          css
            .replace(/oklab\([^)]*\)/g, "rgb(128,128,128)")
            .replace(/oklch\([^)]*\)/g, "rgb(128,128,128)");
        clonedDoc.querySelectorAll("style").forEach((style) => {
          if (style.textContent) {
            style.textContent = replaceOklab(style.textContent);
          }
        });
        // External stylesheets may contain oklab - remove and add hex-only fallback
        const head = clonedDoc.querySelector("head");
        const theme = clonedElement.getAttribute("data-theme") || "emerald";
        if (head) {
          clonedDoc.querySelectorAll('link[rel="stylesheet"]').forEach((l) => l.remove());
          const fallback = clonedDoc.createElement("style");
          fallback.textContent = getPdfFallbackStyles(theme);
          head.appendChild(fallback);
        }
        // Full-page layout: A5 = 560x794px (96dpi), theme background, card fills space
        const pageBg = PDF_PAGE_BG[theme] || PDF_PAGE_BG.emerald;
        Object.assign(clonedElement.style, {
          width: "560px",
          height: "794px",
          minWidth: "560px",
          minHeight: "794px",
          background: pageBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",
          margin: "0",
        });
        const card = clonedElement.firstElementChild as HTMLElement | null;
        if (card) {
          Object.assign(card.style, {
            width: "92%",
            maxWidth: "92%",
            maxHeight: "92%",
            flexShrink: "0",
          });
        }
        // Replace SVGs with Unicode (html2canvas fails on oklab in SVG)
        clonedElement.querySelectorAll("svg").forEach((svg) => {
          const parent = svg.parentElement;
          const span = clonedDoc.createElement("span");
          span.setAttribute("aria-hidden", "true");
          let char = "✦";
          if (parent?.closest(".flex.gap-3.mb-6")) char = "🌙";
          else if (parent?.closest(".top-4.right-4")) char = "🌙";
          else if (parent?.closest(".flex.gap-2.mb-3")) char = "🎁";
          span.textContent = char;
          span.style.cssText = "display:inline-flex;align-items:center;justify-content:center;font-size:1em;line-height:1";
          svg.parentNode?.replaceChild(span, svg);
        });
      },
    });

    const imgData = canvas.toDataURL("image/png", 1.0);
    if (!imgData || imgData === "data:,") {
      throw new Error("Failed to generate image from canvas");
    }

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a5",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // Scale image to cover full page (fill entire PDF page)
    const scale = Math.max(pageWidth / canvas.width, pageHeight / canvas.height);
    const imgWidth = canvas.width * scale;
    const imgHeight = canvas.height * scale;
    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;
    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

    pdf.save(filename);
    return true;
  } catch (err) {
    console.error("PDF download failed:", err);
    return false;
  }
}
