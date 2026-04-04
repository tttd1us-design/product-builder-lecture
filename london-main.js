const places = [
  {
    title: "빅 벤 & 국회의사당",
    summary: "런던의 상징적인 시계탑과 정치의 중심지",
    description: "템즈 강변에 위치한 빅 벤은 세계에서 가장 유명한 시계탑입니다. 국회의사당의 북쪽 끝에 위치하며, 웅장한 고딕 양식의 건축물을 감상할 수 있습니다. 야경이 특히 아름다워 사진 촬영 명소로 꼽힙니다.",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "런던 아이",
    summary: "유럽에서 가장 높은 대관람차",
    description: "런던의 전경을 360도로 감상할 수 있는 현대적인 명소입니다. 약 30분 동안 한 바퀴를 돌며 샤드, 세인트 폴 대성당 등 런던의 주요 랜드마크를 한눈에 담을 수 있습니다.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "런던 탑",
    summary: "천 년의 역사를 간직한 요새",
    description: "유네스코 세계문화유산으로 지정된 이곳은 왕궁, 감옥, 무기고 등으로 사용되었습니다. 영국의 보석인 '크라운 주얼'이 전시되어 있으며, 런던의 깊은 역사를 체험할 수 있는 곳입니다.",
    image: "https://images.unsplash.com/photo-1543332143-4e8c27e3256f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "영국 박물관",
    summary: "인류 역사와 문화의 보물창고",
    description: "세계 최대 규모의 박물관 중 하나로, 로제타 스톤, 파르테논 신전의 조각상 등 전 세계에서 수집된 방대한 유물을 보유하고 있습니다. 입장료가 무료인 것도 큰 장점입니다.",
    image: "https://images.unsplash.com/photo-1518902787645-0373809623e1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "버킹엄 궁전",
    summary: "영국 왕실의 공식 거주지",
    description: "영국 군주의 공식 집무실이자 거처입니다. 정해진 시간에 열리는 근위병 교대식은 런던 여행에서 빼놓을 수 없는 구경거리입니다. 여름 시즌에는 궁전 내부의 화려한 국빈실(State Rooms)도 일반에 공개됩니다.",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "타워 브리지",
    summary: "개폐식 구조가 인상적인 다리",
    description: "런던의 또 다른 상징으로, 대형 선박이 지나갈 때 다리가 열리는 모습이 장관입니다. 상단 통로의 유리 바닥을 걸으며 템즈 강 위에서 아찔한 경험을 할 수 있습니다.",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "웨스트민스터 사원",
    summary: "왕실의 대관식과 장례식이 치러지는 곳",
    description: "수많은 영국 왕들이 잠들어 있는 곳이자, 왕실의 결혼식이 열리는 성스러운 장소입니다. 고딕 양식의 정수를 보여주는 건축미와 영국 역사 인물들의 기념비가 가득합니다.",
    image: "https://images.unsplash.com/photo-1530906236207-68045610ec87?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "더 샤드",
    summary: "런던에서 가장 높은 초고층 빌딩",
    description: "렌조 피아노가 설계한 유리 조각 모양의 건물입니다. 서유럽에서 가장 높은 전망대를 갖추고 있으며, 구름 위에서 런던의 현대적인 스카이라인을 감상할 수 있습니다.",
    image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "코벤트 가든",
    summary: "문화, 쇼핑, 거리 공연의 중심",
    description: "아기자기한 상점, 시장, 맛집이 모여 있는 활기찬 구역입니다. 로열 오페라 하우스가 위치해 있으며, 연중 내내 펼쳐지는 수준 높은 거리 공연이 여행자들의 발길을 붙잡습니다.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "피카딜리 서커스",
    summary: "런던의 타임스퀘어",
    description: "화려한 네온사인 광고판과 에로스 동상으로 유명한 런던의 만남의 광장입니다. 쇼핑가인 리전트 스트리트와 극장가인 웨스트엔드가 만나는 지점으로, 런던의 에너지를 가장 잘 느낄 수 있습니다.",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&q=80&w=800"
  }
];

const placeList = document.getElementById("place-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-btn");

function init() {
  places.forEach((place, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image" style="background-image: url('${place.image}')"></div>
      <div class="card-content">
        <h3 class="card-title">${index + 1}. ${place.title}</h3>
        <p class="card-summary">${place.summary}</p>
      </div>
    `;
    card.addEventListener("click", () => showModal(place));
    placeList.appendChild(card);
  });
}

function showModal(place) {
  modalTitle.textContent = place.title;
  modalDescription.textContent = place.description;
  modal.style.display = "flex";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", init);


function showModal(place) {
  modalTitle.textContent = place.title;
  modalDescription.textContent = place.description;
  modal.style.display = "flex";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", init);
