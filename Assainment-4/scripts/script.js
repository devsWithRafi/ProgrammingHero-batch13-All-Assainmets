const jobCardContainer = getEliment('jobCardContainer');
let jobData = [...allJobData];


const renderJobCards = () => {    
    jobCardContainer.innerHTML = '';

    const totalInterview = jobData.filter(j => j.status.toLowerCase() === 'interview').length
    const totalRejected = jobData.filter(j => j.status.toLowerCase() === 'rejected').length
    const totalJobs = jobData.length;

    getEliment('totalJobs').innerText = totalJobs
    getEliment('totalInterview').innerText = totalInterview
    getEliment('totalRejected').innerText = totalRejected

    jobData.forEach((job) => {
        jobCardContainer.appendChild(jobCard(job));
    });

};


const changeStatus = (id, newStatus) => {
    if (!newStatus) return;
    const job = jobData.find((j) => j.id === id);

    if (job) {
        job.status = newStatus;
        renderJobCards();
    }
};

const deleteJobCard = (id) => {
    jobData = jobData.filter((job) => job.id !== id);
    renderJobCards();
};

renderJobCards();
