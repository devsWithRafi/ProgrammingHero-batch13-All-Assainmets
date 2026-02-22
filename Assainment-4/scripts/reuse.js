const getEliment = (id) => {
    const eliment = document.getElementById(id);
    return eliment;
};



const jobCard = (job) => {
    const card = document.createElement('div');
    card.className = 'card bg-base-300 w-full shadow-sm overflow-hidden border border-gray-700 hover:-translate-y-1 transition-all';
    card.setAttribute('job-id', job.id)


    card.innerHTML = `
         <div class="card-body overflow-hidden relative">
            <!-- job card top -->
            <div class="flex items-center justify-between">
              <div>
                <h2 class="card-title font-bold sm:text-2xl text-xl">${job.companyName}</h2>
                <p class="text-gray-400 sm:text-xl text-lg">${job.position}</p>
              </div>
              <button onclick="deleteJobCard('${job.id}')" class="btn btn-error btn-outline sm:size-8.5 size-8  text-zinc-400 hover:text-red-400 hover:bg-red-500/20 hover:border-red-500/30 border-zinc-600  btn-circle">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>

            <!-- job card middle -->  
            <div class="py-4 flex flex-col items-start sm:gap-5 gap-3">
              <div class="font-medium text-[15px] text-gray-400 flex sm:items-center sm:flex-row flex-col sm:gap-4">
                <li class="sm:list-none list-inside">${job.location}</li>
                <li class="list-inside">${job.type}</li>
                <li class="list-inside">${job.salary}</li>
              </div>
              <!-- job card status -->
              <span class="badge badge-outline border-2 border-gray-500 text-gray-400 uppercase font-medium rounded-lg p-4 text-[15px]">${job.status.replace('_', ' ')}</span>
              <p class="text-zinc-400 sm:text-[18px] text-[15px]">${job.description}</p>
            </div>

            <!-- job card bottom buttons -->
            <div class="card-actions sm:justify-start justify-between">
              <button onclick="changeStatus('${job.id}', 'interview')" class="btn btn-outline btn-success px-8 hover:text-white uppercase sm:w-auto w-full">Interview</button>
              <button onclick="changeStatus('${job.id}', 'rejected')" class="btn btn-outline btn-error px-8 hover:text-white uppercase sm:w-auto w-full">Rejected</button>
            </div>
         </div>
      `;

    return card;
};
