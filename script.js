//your JS code here. If required.
 function getData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      });
    }

    function filterEven(numbers) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter(num => num % 2 === 0);
          resolve(evenNumbers);
        }, 1000);
      });
    }

    function multiplyByTwo(numbers) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = numbers.map(num => num * 2);
          resolve(multipliedNumbers);
        }, 2000);
      });
    }

    getData()
      .then(filterEven)
      .then(multiplyByTwo)
      .then(result => {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = result.join(", ");
      })
      .catch(error => {
        console.error("Error:", error);
      });