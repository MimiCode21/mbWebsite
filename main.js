// Mummys Hub
function hovermumtohover(id)
{
 id.src = "./Mumuyshubone.png"
}   
function hoverOutmumtohover(id){
 id.src = "./Hover over.png"
}

// Tea Sanctuary
function hoverteatohover(id)
{
 id.src = "./Teasanctuaryone.png"
}   
function hoverOutteatohover(id){
 id.src = "./Hover over.png"
}   

// Ramen Bar
function hoverramentohover(id)
{
 id.src = "./Ramenone.png"
}   
function hoverOutramentohover(id){
 id.src = "./Hover over.png"
} 

// Sweet Tooth
function hoversweettohover(id)
{
 id.src = "./sweettoothss1.png"
}   
function hoverOutsweettohover(id){
 id.src = "./Hover over.png"
} 

// Fruity API
function hoverfruitytocover(id)
{
 id.src = "./fruitapifruit.png"
}   
function hoverOutfruitytocover(id){
 id.src = "./Hover over.png"
} 

// CreamIce Email Template
function hovercreamtohover(id)
{
 id.src = "./CreamIceSS.png"
}   
function hoverOutcreamtohover(id){
 id.src = "./Hover over.png"
} 


// Mummys Hub
const mumtohoverImage = document.getElementById("mumtohover");
mumtohoverImage.addEventListener("mouseover", function() {
    hovermumtohover(this);
});
mumtohoverImage.addEventListener("mouseout", function() {
    hoverOutmumtohover(this);
})

// Tea Sanctuary
const teatohoverImage = document.getElementById("teatohover");
teatohoverImage.addEventListener("mouseover", function() {
    hoverteatohover(this);
});
teatohoverImage.addEventListener("mouseout", function() {
    hoverOutteatohover(this);
})

// Ramen Bar
const ramentohoverImage = document.getElementById("ramentohover");
ramentohoverImage.addEventListener("mouseover", function() {
    hoverramentohover(this);
});
ramentohoverImage.addEventListener("mouseout", function() {
    hoverOutramentohover(this);
})

// Sweet Tooth
const sweettohoverImage = document.getElementById("sweettohover");
sweettohoverImage.addEventListener("mouseover", function() {
    hoversweettohover(this);
});
sweettohoverImage.addEventListener("mouseout", function() {
    hoverOutsweettohover(this);
})

// Fruity API
const fruitytocoverImage = document.getElementById("fruitytocover");
fruitytocoverImage.addEventListener("mouseover", function() {
    hoverfruitytocover(this);
});
fruitytocoverImage.addEventListener("mouseout", function() {
    hoverOutfruitytocover(this);
})

// CreamIce Email Template
const creamtohoverImage = document.getElementById("creamtohover");
creamtohoverImage.addEventListener("mouseover", function() {
    hovercreamtohover(this);
});
creamtohoverImage.addEventListener("mouseout", function() {
    hoverOutcreamtohover(this);
})

