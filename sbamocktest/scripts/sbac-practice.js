(function () {
  const data = window.SBAC_PRACTICE_DATA;
  if (!data) {
    console.error('SBAC practice data not found.');
    return;
  }

  const titleEl = document.getElementById('pageTitle');
  const introEl = document.getElementById('intro');
  const passageArea = document.getElementById('passageArea');
  const mcqArea = document.getElementById('mcqArea');
  const writingArea = document.getElementById('writingArea');
  const answerKey = document.getElementById('answerKey');
  const scoreBox = document.getElementById('scoreBox');

  titleEl.textContent = data.meta.title;
  introEl.innerHTML = data.meta.introHtml;

  function renderSections() {
    (data.sections || []).forEach(section => {
      const heading = document.createElement('h2');
      heading.textContent = section.heading;
      passageArea.appendChild(heading);

      if (section.passage) {
        const passage = document.createElement('div');
        passage.className = 'passage';
        let html = `<h3>${section.passage.title}</h3>`;
        (section.passage.paragraphs || []).forEach(p => {
          html += `<p>${p}</p>`;
        });
        passage.innerHTML = html;
        passageArea.appendChild(passage);
      }
    });
  }

  function renderQuestions() {
    let currentHeading = '';
    (data.questions || []).forEach(q => {
      if (q.sectionHeading && q.sectionHeading !== currentHeading) {
        currentHeading = q.sectionHeading;
        const h2 = document.createElement('h2');
        h2.textContent = q.sectionHeading;
        mcqArea.appendChild(h2);
      }

      const div = document.createElement('div');
      div.className = 'question';
      div.id = `q${q.num}`;

      let html = `<p><strong>${q.num}.</strong> ${q.prompt}</p><div class="options">`;
      Object.entries(q.options).forEach(([letter, text]) => {
        html += `
          <label>
            <input type="radio" name="q${q.num}" value="${letter}">
            <strong>${letter}.</strong> ${text}
          </label>
        `;
      });
      html += '</div><div class="result hidden" id="result' + q.num + '"></div>';
      div.innerHTML = html;
      mcqArea.appendChild(div);
    });
  }

  function renderWritingQuestions() {
    let currentHeading = '';
    (data.writingQuestions || []).forEach(q => {
      if (q.sectionHeading && q.sectionHeading !== currentHeading) {
        currentHeading = q.sectionHeading;
        const h2 = document.createElement('h2');
        h2.textContent = q.sectionHeading;
        writingArea.appendChild(h2);
      }

      const div = document.createElement('div');
      div.className = 'question';
      div.innerHTML = `
        <p><strong>${q.num}.</strong> ${q.prompt}</p>
        <textarea placeholder="Type your answer here..."></textarea>
        <div class="sample-answer hidden" id="sample${q.num}">
          <strong>Sample answer:</strong> ${q.sampleAnswer}
        </div>
        <p><button class="tertiary" type="button" onclick="toggleSample('sample${q.num}')">Show/Hide Sample Answer</button></p>
      `;
      writingArea.appendChild(div);
    });
  }

  function renderAnswerKey() {
    let html = '<h2>Answer Key</h2>';
    (data.questions || []).forEach(q => {
      html += `<p><strong>${q.num}.</strong> ${q.answer}</p>`;
    });

    if ((data.writingQuestions || []).length) {
      html += '<div class="divider"></div>';
      data.writingQuestions.forEach(q => {
        html += `<p><strong>${q.num} sample:</strong> ${q.sampleAnswer}</p>`;
      });
    }

    answerKey.innerHTML = html;
  }

  window.checkAnswers = function checkAnswers() {
    let correctCount = 0;
    (data.questions || []).forEach(q => {
      const qDiv = document.getElementById(`q${q.num}`);
      const selected = document.querySelector(`input[name="q${q.num}"]:checked`);
      const result = document.getElementById(`result${q.num}`);
      qDiv.classList.remove('correct', 'incorrect');
      result.classList.remove('hidden');

      if (!selected) {
        result.textContent = `No answer selected. Correct answer: ${q.answer}`;
        result.style.color = '#92400e';
        return;
      }

      if (selected.value === q.answer) {
        correctCount += 1;
        qDiv.classList.add('correct');
        result.textContent = 'Correct';
        result.style.color = '#166534';
      } else {
        qDiv.classList.add('incorrect');
        result.textContent = `Incorrect. Correct answer: ${q.answer}`;
        result.style.color = '#b91c1c';
      }
    });

    scoreBox.textContent = `Score: ${correctCount} / ${(data.questions || []).length}`;
  };

  window.toggleAnswerKey = function toggleAnswerKey() {
    answerKey.classList.toggle('hidden');
  };

  window.toggleSample = function toggleSample(id) {
    document.getElementById(id).classList.toggle('hidden');
  };

  window.resetQuiz = function resetQuiz() {
    (data.questions || []).forEach(q => {
      document.querySelectorAll(`input[name="q${q.num}"]`).forEach(el => {
        el.checked = false;
      });
      const qDiv = document.getElementById(`q${q.num}`);
      const result = document.getElementById(`result${q.num}`);
      qDiv.classList.remove('correct', 'incorrect');
      result.classList.add('hidden');
      result.textContent = '';
    });

    document.querySelectorAll('textarea').forEach(t => {
      t.value = '';
    });

    (data.writingQuestions || []).forEach(q => {
      const sample = document.getElementById(`sample${q.num}`);
      if (sample) {
        sample.classList.add('hidden');
      }
    });

    answerKey.classList.add('hidden');
    scoreBox.textContent = 'Score: Not checked yet';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  renderSections();
  renderQuestions();
  renderWritingQuestions();
  renderAnswerKey();
})();
