const issueCardContainer = getEliment('issueCardContainer');

const renderCards = async () => {
    issueCardContainer.innerHTML = '';

    const res = await fetch(
        'https://phi-lab-server.vercel.app/api/v1/lab/issues',
    );
    const data = await res.json();

    data.data.forEach((item) => {
        issueCardContainer.appendChild(issueCard(item));
    });

//     const arr = data.data.map(item => item.labels)
//     const allLab = []
//     for(x of arr){
//       x.forEach(j => allLab.push(j))
//     }
//     const set = [...new Set(allLab)]
//     console.log(set);
};

renderCards();
