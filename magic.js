
// this function jsut make it shorter to copy something to the clipboard
function copy_TC(item, text = null) {

    

    if (text === null) {
        navigator.clipboard.writeText(
            item.textContent
        ).then(event => {
            console.log('Texto copiado', event);
        });
    } else {
        navigator.clipboard.writeText(
            text
        ).then(event => {
            console.log('Texto da área de transferência:', event);
        });
    }


}

function copyHandler(item){

    const altTxt = item.getAttribute("altTxt");

    if (altTxt){
        copy_TC(item,altTxt)
    }else{
        copy_TC(item)
    }   
}

