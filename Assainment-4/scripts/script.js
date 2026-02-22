const jobCardContainer = getEliment('jobCardContainer');

let currentSelectedTab = 'all';
let jobData = [...allJobData];
const tabButtons = document.querySelectorAll('.tabButton')
const availableJob = getEliment('availableJob')



const renderJobCards = () => {
    const jobDataFiltered = currentSelectedTab === 'all' ? jobData : jobData.filter((j) => j.status === currentSelectedTab);
    
    jobCardContainer.innerHTML = '';


    const totalInterview = jobData.filter(j => j.status.toLowerCase() === 'interview').length
    const totalRejected = jobData.filter(j => j.status.toLowerCase() === 'rejected').length
    const totalJobs = jobData.length;

    getEliment('totalJobs').innerText = totalJobs
    getEliment('totalInterview').innerText = totalInterview
    getEliment('totalRejected').innerText = totalRejected


    availableJob.innerText = currentSelectedTab === 'all' ? `${totalJobs} jobs` : (currentSelectedTab === 'interview' 
                             ? `${totalInterview} of ${totalJobs} jobs` : `${totalRejected} of ${totalJobs} jobs`)


    jobDataFiltered.forEach((job) => {
        jobCardContainer.appendChild(jobCard(job));
    });

    tabButtons.forEach(button => {
        button.classList.remove('bg-green-400')

        if(button.getAttribute('data-value') === currentSelectedTab){
            button.classList.add('bg-green-400')
        }
    })
};


tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentSelectedTab = button.getAttribute('data-value')
        renderJobCards()
    })
})

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
