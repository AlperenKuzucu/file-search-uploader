// Drag & drop + tıklayıp seçince otomatik yükle + Enter ile arama
const dz = document.getElementById("dropzone");
const fileInput = document.getElementById("file-input");
const uploadForm = document.getElementById("upload-form");

if (dz) {
  ["dragenter","dragover"].forEach(ev =>
    dz.addEventListener(ev, e => { e.preventDefault(); e.stopPropagation(); dz.classList.add("drag"); })
  );
  ["dragleave","drop"].forEach(ev =>
    dz.addEventListener(ev, e => { e.preventDefault(); e.stopPropagation(); dz.classList.remove("drag"); })
  );
  dz.addEventListener("drop", e => {
    if (fileInput && uploadForm && e.dataTransfer.files?.length) {
      fileInput.files = e.dataTransfer.files;
      uploadForm.submit();
    }
  });
  dz.addEventListener("click", () => fileInput?.click());
}

if (fileInput && uploadForm) {
  fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files.length) uploadForm.submit();
  });
}

const term = document.querySelector('input[name="term"]');
const searchForm = document.getElementById("search-form");
if (term && searchForm) {
  term.addEventListener("keydown", (e) => { if (e.key === "Enter") searchForm.submit(); });
}
