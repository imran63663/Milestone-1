var _a, _b;
(_a = document.getElementById('toggleSkills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsSection = document.getElementById('skillsSection');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
(_b = document.getElementById('profilePic')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', function (event) {
    var _a;
    var input = event.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var img = document.getElementById('profilePicPreview');
            img.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
