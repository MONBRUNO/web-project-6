// 메인 컨테이너 생성
const container = document.createElement("div");
container.className = "container";

// 프로필 섹션 생성
function createProfileSection() {
    const profileSection = document.createElement("div");
    profileSection.className = "text-center";

    const profilePicture = document.createElement("img");
    profilePicture.src = "/류연우1민d.jpg"; 
    profilePicture.alt = "프로필 사진";
    profilePicture.className = "profile-picture";

    const name = document.createElement("h1");
    name.textContent = "안녕하세요! 저는 류연우입니다.";

    const jobTitle = document.createElement("p");
    jobTitle.textContent = "저는 경성대학교 재학중인 개발자 꿈나무입니다.";
    jobTitle.className = "lead";

    profileSection.appendChild(profilePicture);
    profileSection.appendChild(name);
    profileSection.appendChild(jobTitle);

    return profileSection;
}

// 스킬 섹션 생성
function createSkillsSection() {
    const skillsSection = document.createElement("div");
    skillsSection.className = "section";

    const skillsTitle = document.createElement("h2");
    skillsTitle.textContent = "Skills";

    const skillsList = document.createElement("ul");

    const skills = {
        "Frontend": ["HTML", "CSS", "JavaScript"],
        "Backend": ["Python", "", ""],
        "Tools": ["Adobe Photoshop", "Adobe Illustrator", "figma"]
    };

    for (const [category, items] of Object.entries(skills)) {
        const categoryTitle = document.createElement("h5");
        categoryTitle.textContent = category;
        skillsList.appendChild(categoryTitle);

        items.forEach(skill => {
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
        });
    }

    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsList);

    return skillsSection;
}

// 연락처 섹션 생성
function createContactSection() {
    const contactSection = document.createElement("div");
    contactSection.className = "section";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact";

    const contactInfo = document.createElement("p");
    contactInfo.innerHTML = `
        이메일: <a href="mailto:christin6545@naver.com">christin6545@naver.com</a><br>
        LinkedIn: <a href="https://www.youtube.com/@MONBRUNO" target="_blank">https://www.youtube.com/@MONBRUNO</a><br>
        GitHub: <a href="https://github.com/MONBRUNO" target="_blank">https://github.com/MONBRUNO</a>
    `;

    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactInfo);

    return contactSection;
}

// 페이지에 섹션 추가
container.appendChild(createProfileSection());
container.appendChild(createSkillsSection());
container.appendChild(createContactSection());

// 컨테이너를 body에 추가
document.body.appendChild(container);
