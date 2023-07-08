//select element from html file
const fruitForm = document.querySelector("#inputSection form")

const fruitNutrition = document.querySelector("#nutritionSection p")
let cal = 0

const fruitList = document.querySelector("#fruitSection ul")
const fruitImageList = document.querySelector(".fruitImage ul")

const addFruit = fruit => {
    //add fruit submitted to list
    const li = document.createElement('li')
    //.name to keep fruit as text not obj
    li.textContent = `${fruit.name} of Genus ${fruit.genus}`
    fruitList.appendChild(li)
    cal+=fruit.nutritions.calories
    //remove fruit when clicked
    li.addEventListener("click", () => {
        li.remove()
        cal-=fruit.nutritions.calories
        //update cal after fruit removed
        fruitNutrition.textContent = (cal===0 ? "" :`Total calories: ${cal}`)
        //fruitImageList.removeChild(img)
    }, {once:true})
    //running total of salad cal
    fruitNutrition.textContent = `Total calories: ${cal}`
    //fetch fruit image
    fetchFruitImage(fruit.name)
}

//fetch image of fruit
const fetchFruitImage = async (fruit) => {
    console.log(fruit)
    try{
        const resp = await fetch(`https://pixabay.com/api/?key=37050473-40f569f988404354c061a5e77&q=${fruit}&image_type=photo`)
        if (resp.ok){
            const data = await resp.json()
            addImage(data,fruit)
        } else {
            throw "Error: http status code = " + resp.status
        }
    } catch (err) {
        console.log(err)
    }
}

//add image of fruit
const addImage = (data,fruit) => {
    const img=document.createElement('img')
    img.src=data.hits[0].largeImageURL
    img.alt=`Image of a ${fruit}`
    fruitImageList.appendChild(img)
    //console.log("addImage func")
    //console.log(data.hits[0].largeImageURL)
}

const fetchFruitData = async (fruit) => {
    try {
        //await to fetch data before anything else
        const resp = await fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
        if (resp.ok){
            const data = await resp.json()
            addFruit(data)
        } else {
            throw "Error: http status code = " + resp.status
        }
    //error handling
    } catch (err) {
        console.log(err)
        alert("Fruit not found.")
    }

    // fetch image of fruit
    // const fetchFruitImage = async (fruit) => {
    //     try{
    //         const resp = await fetch(`https://pixabay.com/api/?key=37050473-40f569f988404354c061a5e77&q=${fruit}&image_type=photo`)
    //         if (resp.ok){
    //             const data = await resp.json()
    //             addImage(data)
    //         } else {
    //             throw "Error: http status code = " + resp.status
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    //  }
}

const extractFruit = e => {
    e.preventDefault() //action does not clear
    // console.log(`You typed ${e.target.fruitInput.value}`)
    //addFruit(e.target.fruitInput.value)
    fetchFruitData(e.target.fruitInput.value)
    // clear text box
    e.target.fruitInput.value = ""
}

fruitForm.addEventListener("submit", extractFruit)


