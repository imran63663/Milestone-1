
document.getElementById('toggleSkills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skillsSection');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});

document.getElementById('profilePic')?.addEventListener('change', (event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.getElementById('profilePicPreview') as HTMLImageElement;
            img.src = e.target?.result as string;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});