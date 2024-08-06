function logFamily(father,mother,...children){
    let formateChildren = children.join();
    console.log(`${father} ${mother}`)
    console.log(`${formateChildren}`)
}
let family = ["Ramesh","Laxmi","Naresh","Aravind"]
logFamily(...family)