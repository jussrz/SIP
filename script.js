// ===== JAVASCRIPT =====

// ── ACTIVITIES DATA ──
const acts = [
  {
    n: '01',
    tag: 'Personal Symbol',
    title: 'My Personal Symbol',
    year: '2026',
    img: 'act1.jpg',
    text: 'I chose a leaf floating on dark, rippling water as my personal symbol. The leaf is small yet resilient — it does not fight the current but rests on it, trusting the water to carry it forward. To me, this represents how I try to move through life: not forcing things, but staying present and grounded even in uncertain or dark surroundings. The ripples around the leaf remind me that every small action I take still creates a wave, no matter how quiet I am. I am that leaf — still finding my way, still floating, still moving.'
  },
  {
    n: '02',
    tag: 'Data Visualization',
    title: 'How I Spend My Time',
    year: '2026',
    img: 'act2.jpg',
    text: 'This activity asked me to visualize how I distribute my time and energy. My pie chart showed two dominant slices: spending time with my family and playing games. At first it looked simple — even shallow — but reflecting on it, I realized these two things are actually the core of how I rest and reconnect. Gaming is my decompression; it is where I go when the world feels heavy. Family is my anchor. The activity made me ask: am I investing my time in ways that will matter five years from now? It was a small drawing, but it opened a bigger question.'
  },
  {
    n: '03',
    tag: 'Self-Assessment',
    title: 'My Dimensions of Growth',
    year: '2026',
    img: 'act3.jpg',
    text: 'This grid mapped my growth across three dimensions — Academic/Human, Social, and Spiritual. Under Skills, I identified critical thinking, teamwork, and reflection. Under Knowledge, I listed problem-solving, group dynamics, and faith and purpose. Under Values, I wrote discipline, respect, and service to others. Seeing these categories side by side made me realize that being a good IT professional is not just about technical skills — it is about how I think, how I treat people, and what I stand for. All three columns have to grow together.'
  },
  {
    n: '04',
    tag: 'Beyond the Self',
    title: 'What Is Beyond Myself',
    year: '2026',
    img: 'act4.jpg',
    text: 'This personal record asked me to reflect on what lies beyond personal achievement. The theme that stayed with me most was being a person for and with others — a reminder that life is not only about what I accomplish, but about using what I have to serve. Through community activities, I learned that service means listening with others, not just helping from a distance. Those experiences made me more mindful of how my actions affect the people around me. I am grateful for my parents, siblings, teachers, and classmates who shaped this value in me.'
  },
  {
    n: '05',
    tag: 'Creative Writing',
    title: 'To You, My Constant',
    year: '2026',
    img: 'act5.jpg',
    text: '"To You, My Constant" is a poem I wrote for someone who walked beside me through every rise and fall of college. Through every failure that knocked me down, they lifted me with a pride that never swayed. Through rough patches that could have been the end, we found our way back home — both of us, together. I treasure them more than they will ever know, for being the one who helped me learn and grow. This poem was my way of naming the people who made my journey survivable — and meaningful.'
  },
  {
    n: '06',
    tag: 'Reflection Essay',
    title: 'On Friendship',
    year: '2026',
    img: 'act6.jpg',
    text: 'When I think about friendship, the first people that come to mind are my classmates and friends who have been with me through everything — the hardest days, the most overwhelming moments, and even the smallest victories that only we understood. Like Ignatius and his companions who shared the same room, table, and struggles, I have learned so much from my own. What strikes me most about the early Jesuits is that their friendship had direction. In my own friendships, we are all chasing the same mission and pushing each other not to give up. Friendship is not just about having someone to be with — it is having people who remind you of who you are and where you are going. I am grateful that I found my people.'
  },
  {
    n: '07',
    tag: 'Ignatian Reflection',
    title: 'Accepting My Limits',
    year: '2026',
    img: 'act7.jpg',
    text: 'The key insight from this activity was accepting my limits and not living with a heart full of pride. This will help me become a better professional — it will guide me in navigating through hardships and problems that will come my way. My awakening statement: "As I step into my future profession, my awakening leads me to success and realizing that nothing is impossible to reach and experience inner freedom." Humility is not weakness; it is the foundation of real growth.'
  },
  {
    n: '08',
    tag: 'Soul Reflection',
    title: 'St. Ignatius & The Magis',
    year: '2026',
    img: 'act8.jpg',
    text: 'Reading about St. Ignatius made me realize that setbacks are not punishments but invitations to grow. When I failed a subject in Engineering at AdDU, I felt lost and disappointed — yet that moment pushed me to reflect on what truly made me happy. Like Ignatius, I began to notice the difference between forcing myself to chase something that drained me and choosing a path that gave me peace and pride, which led me to IT. The idea of Magis speaks to me as choosing the path where I can love what I do more deeply and serve others with my skills in a more meaningful way. Hearing the words "I loved you first" makes me feel accepted even in my failure, reminding me that my worth was never based on my performance. In response, I want to live with greater trust and courage — choosing decisions not out of fear or pressure, but out of love, purpose, and a desire to grow into the person I am meant to be.'
  },
  {
    n: '09',
    tag: 'Manresa Moment',
    title: 'My Conversion Moment',
    year: '2026',
    img: 'act9.jpg',
    text: 'My Manresa moment came when I shifted from Civil Engineering to Information Technology — a decision that terrified me but felt undeniably right in my soul. The consolation was the peace I felt when I finally chose what truly resonated with my heart, like a heavy burden lifting off my shoulders. My desolation came during third year, drowning in impossible subjects and questioning if I made the right decision, feeling lost and inadequate. Yet through it all, my friends, my special person, and the joy I found in lights became signs of God\'s presence, reminding me I wasn\'t walking this path alone. I discerned that when I felt most alive — coding, dancing, living — that\'s where God was calling me to be.'
  },
  {
    n: '10',
    tag: 'Service Reflection',
    title: 'Finding God in Service',
    year: '2026',
    img: 'act10.jpg',
    text: 'As a student and friend, I try to help the people around me whenever I can. Sometimes I feel bad when I am not able to help my friends or classmates when they need it. But I realize that even small actions like listening, giving advice, or just being there can still make a difference. In my daily life, I try to do my responsibilities well and treat others with kindness. Through these simple actions, I believe God can work through me to help others.'
  },
  {
    n: '11',
    tag: 'Film Reflection',
    title: 'The Pursuit of Happyness',
    year: '2026',
    img: 'act11.jpg',
    text: 'I was struck by how deeply the story reflects perseverance rooted in purpose. As an Ignatian leader, I saw Chris Gardner\'s journey not just as a struggle for success, but as a process of finding meaning in suffering. Despite rejection, poverty, and uncertainty, he continued to choose hope and act with integrity. This reminded me of Magis — striving more, not for personal gain alone, but to become better in service of others, especially his son. From an Ignatian heart, what moved me most was the relationship between Chris and his son. His love was not shown through comfort, but through sacrifice, presence, and commitment. As I prepare to graduate, I realize that life after college will also be uncertain — I just have to move forward with faith, values, and an open heart to follow God.'
  },
  {
    n: '12',
    tag: 'Personal Vision',
    title: '"I\'m Not Dying the Day Before My Life Begins"',
    year: '2026',
    img: 'act12.jpg',
    text: '"I\'m not dying the day before my life begins" hit me because I felt it, not just understood it. Joe was so close to everything he worked for, and the idea of it being taken away before it even started is scary. I have a clear picture of where I want to go: my own car, my own house, businesses that work even when I\'m resting, a family that is happy and whole, parents who no longer have to worry about anything. That picture is vivid and I carry it every day. And just like Joe, I refuse to let anything stop me before I even get there. I am driven by something deeper than ambition — it is about the life I want to build, live, and the people I want to bring with me into that life.'
  },
  {
    n: '13',
    tag: 'Growth Through Service',
    title: 'Jannah: Confidence Through Serving',
    year: '2026',
    img: 'act13.jpg',
    text: 'Jannah had no work experience and still said yes. I always wait until I feel ready, until I feel fit enough — but she did not have that luxury and she went anyway. That alone already makes me question my own habit of holding back. She was uncertain too — she even described it as an unshakeable feeling of uncertainty after she was already deployed. But she stayed. That tells me uncertainty isn\'t a sign you\'re in the wrong place; it might mean you\'re exactly where growth happens. I have been treating confidence as a requirement before doing something. Jannah flipped that. She did not serve because she was ready — she became ready because she served. That\'s the part that challenges me most.'
  },
  {
    n: '14',
    tag: 'Future Vision',
    title: 'My Future Setup',
    year: '2026',
    img: 'act14.jpg',
    text: 'This activity asked me to draw my vision for the future. I drew a computer monitor displaying code — ₱9,999,999,999 — with a keyboard and mouse. It is simple, but it says everything. My future is built at a desk, in front of a screen, solving problems and building things that matter. The number on the screen is not just about money — it is about what that number represents: security for my family, freedom to build, and proof that the path I chose was worth it. I want to be someone who creates value through technology, and this drawing is my declaration of that.'
  },
  {
    n: '15',
    tag: 'Values Inventory',
    title: 'Who I Am: A Self-Inventory',
    year: '2026',
    img: 'act15.jpg',
    text: 'This self-inventory mapped out the full picture of who I am. I love gaming, food, and family. I used to play basketball and karate but don\'t do those much anymore. I enjoy gaming, gatherings, and laag. My achievements matter to me, and my parents taught me perseverance, confidence, and will. I value kindness, loyalty, and the Magis. I keep going through failing grades and broken relationships — and I let God handle what I cannot. What drives me most is helping others, especially the poor, and always being kind and respectful. My long-term goal is to create systems or technology that will help the community, help others in any way I can, and be kind and respectful especially to elders. What I want most: family, job, money, a healthy body, and a long life.'
  },
  {
    n: '16',
    tag: 'Conversion Essay',
    title: 'My Conversion Story — Part I',
    year: '2026',
    img: 'act16A.jpg',
    text: 'I did not expect that a single academic decision would become one of the most defining moments of my life. When I shifted to Information Technology, I entered unfamiliar territory — a world of logic, code, and systems I had never formally explored. Yet something in me stirred. I found that I was not just learning; I was discovering. With every subject, every project, and every challenge that came my way, I began to feel a quiet but growing conviction that I had finally found where I belong. My OJT deepened this further. I stepped into a professional environment where I was no longer just a student completing requirements — I was someone who had to show up, contribute, and be accountable. In those moments, I felt something I had not fully felt before: I believed I could be a competent, capable IT professional. That belief changed me. But before I could arrive at that confidence, I had to pass through a season of darkness — failure, self-doubt, and the weight of losing my sense of direction. Those interior struggles were not easy. But in the desolate moments, I also began to notice small consolations: a subject that excited me, a task that came naturally, a moment in the computer lab where everything just clicked. These small lights helped me see through the fog.'
  },
  {
    n: '17',
    tag: 'Conversion Essay',
    title: 'My Conversion Story — Part II',
    year: '2026',
    img: 'act16B.jpg',
    text: 'What emerged from all of that struggle is not a dramatic transformation, but something quieter and more durable: I learned to trust myself. I stopped waiting for certainty before I could move forward. I chose to do what I love — computers, technology, problem-solving — and I chose to keep going even when the doubts were still present. I did not silence those voices of fear; I simply decided they would not have the final say. I now see failure not as a verdict on who I am, but as a redirection toward who I am meant to become. I see struggle not as a sign that I do not belong, but as the very path through which I grow. And I see myself not as someone who barely survived the shift, but as someone who was shaped by it. My Ateneo journey has taught me that conversion is not a single moment. It is a long, quiet process of returning to yourself, again and again, until you finally recognize the person you have been becoming all along.'
  },
];

// ── BUILD ACTIVITY CARDS ──
(function buildActs(){
  const container = document.getElementById('act-collage');
  if (!container) return;

  acts.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'act-card';
    card.onclick = function() { openModal(i); };
    card.innerHTML = `
      <div class="act-card-image-wrap">
        <img src="${a.img}" alt="Activity ${a.n}" class="act-card-image" loading="lazy"/>
      </div>
      <div class="act-card-inner">
        <div class="act-card-header">
          <span class="act-card-num">${a.n}</span>
          <span class="act-card-tag">${a.tag}</span>
        </div>
        <h3 class="act-card-title">${a.title}</h3>
        <span class="act-card-year">${a.year}</span>
        <div class="act-card-cta">
          <span>Read Reflection</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>`;
    container.appendChild(card);
  });
})();

// ── MODAL ──
function openModal(i) {
  const a = acts[i];
  document.getElementById('modal-img').src   = a.img;
  document.getElementById('modal-img').alt   = a.title;
  document.getElementById('modal-num').textContent   = a.n + ' / 17';
  document.getElementById('modal-tag').textContent   = a.tag;
  document.getElementById('modal-title').textContent = a.title;
  document.getElementById('modal-year').textContent  = a.year;
  document.getElementById('modal-text').textContent  = a.text;

  const overlay = document.getElementById('act-modal-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModalDirect() {
  document.getElementById('act-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  // Close only if clicking the backdrop, not the modal itself
  if (e.target === document.getElementById('act-modal-overlay')) {
    closeModalDirect();
  }
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModalDirect();
});

// ── PAGE ROUTING ──
function go(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  document.querySelectorAll('[data-p]').forEach(a => a.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) {
    target.style.display = '';
    target.classList.add('active');
  }

  const lnk = document.querySelector(`[data-p="${id}"]`);
  if (lnk) lnk.classList.add('active');

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

// ── PASSION PLAN TABS ──
function passionTab(id, btn){
  document.querySelectorAll('.passion-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.passion-tab').forEach(t => t.classList.remove('active'));
  const card = document.getElementById(`passion-${id}`);
  if (card) card.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
});

// ── INITIAL NAV STATE ──
document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('[data-p="home"]');
  if (homeLink) homeLink.classList.add('active');
});