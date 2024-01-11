document.addEventListener("DOMContentLoaded", function () {
  // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint to fetch GitHub data.
  const backendEndpoint = 'YOUR_BACKED_ENDPOINT';
  
  // fetch github data from the backend
   fetch(backendEndpoint)
       .then(response => response.json())
       .then(data =>{
       // Process GitHub data
         const repositories = data.repositories;

       // Extract repository names and stars
       const repoName = repositories.map(repo => repo.name);
       const repoStars = repositories.map(repo => repo.stargazers_count);
       const repoFork = repositories.map(repo => repo.forks_count);

       // Draw charts
       drawChart('repoStartChart', 'Stars per Repository', repoNames, repoStars);
       drawChart('repoForkChart', 'Forks per Repositories', repoNames, repoForks);
     })
     .catch(error => console.error('Error fetching GitHub data:', error));
  
      // Function to draw charts using Chart.js
  function drawChart(canvasId, title, labels, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
        type: 'bar',
    data:{
       labels: labels,
      datasets: [{
        label: title,
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
            beginAtZero: true
        }
      }
    }
  });
  }
});
