const jobCardContainer = getEliment('jobCardContainer');

let jobData = [...allJobData];

jobCardContainer.innerHTML = '';

jobData.forEach((job) => {
    jobCardContainer.appendChild(jobCard(job));
});
