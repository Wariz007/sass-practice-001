const rates = document.querySelectorAll('.main-container__rates button');
const submitBtn = document.querySelector('.submitBtn');
const firstContainer = document.querySelector('.main-container');
const secondContainer = document.querySelector('.tym-container');
const decscirption = document.querySelector('.tym-container__description');

console.log(rates);
console.log(decscirption);

let selectedRate = '';

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        rates.forEach(btn => btn.classList.remove('selected'));
        rate.classList.add('selected');
        selectedRate = rate.textContent.trim();
        console.log('Selected:', rate.textContent);
    })
})


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const isSelectecd = Array.from(rates).some(rate =>
        rate.classList.contains('selected')
    );
    console.log(isSelectecd);

    if(isSelectecd){
        firstContainer.classList.add('hidden');
        secondContainer.classList.remove('hidden');
        decscirption.textContent = `You have selected ${selectedRate} out of 5`
    } else {
        console.log('pick a rate');
    }

})