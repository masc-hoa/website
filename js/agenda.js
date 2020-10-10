window.onload = () => {
  fetch("./agenda.json")
    .then(response => response.json())
    .then(data => buildAgenda(data));
};

const buildAgenda = entries => {
  const items = entries
    .map(
      entry =>
        `<tr class="entry"><td>${entry.time}</td><td>${entry.event}</td></tr>${
          entry.breakdown.length > 0 ? buildBreakdown(entry.breakdown) : ""
        }`
    )
    .join("");
  document.getElementById("agenda").innerHTML = items;
};

const buildBreakdown = breakdown =>
  `<tr><td></td><td><ol>${breakdown
    .map(item => `<li>${item}</li>`)
    .join("")}</ol></td></tr>`;
