async function lottery() {
  console.log("Вы начали игру");

  try {
    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random(0) > 0.5 ? resolve("Победа") : reject("вы промахнулись");
      }, 1000);
    });

    const result = await promise;

    console.log(result);
  } catch (error) {
    console.log("К сожалению", error);
  } finally {
    console.log("Конечный код");
  }
}

lottery();


