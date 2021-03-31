const dummyText = [
    'Topping sugar plum sweet cake candy canes icing donut. Soufflé macaroon cookie powder gingerbread oat cake donut. Croissant biscuit cheesecake fruitcake cotton candy sugar plum tiramisu. Powder dessert powder danish liquorice cake danish. Cotton candy apple pie sugar plum apple pie caramels jelly beans. Wafer marshmallow cake ice cream icing halvah. Muffin chocolate bar pastry chocolate bar.',
    'Jujubes candy icing. Candy canes tootsie roll liquorice sesame snaps ice cream lemon drops cookie. Candy biscuit croissant. Caramels dragée cookie tootsie roll dessert sweet roll cookie. Sesame snaps halvah dessert lemon drops cheesecake caramels. Chocolate sweet roll candy gummies jelly beans wafer topping.',
    'Cookie brownie candy tiramisu soufflé. Brownie bear claw candy canes. Lemon drops candy soufflé bonbon sesame snaps gummi bears. Ice cream cotton candy danish jelly-o biscuit caramels gummies pie wafer. Ice cream donut candy brownie bonbon wafer. Pie wafer jelly beans ice cream danish tiramisu candy canes. Gummies danish bonbon candy lollipop chocolate icing.',
    'Toffee muffin pudding halvah chocolate cake dragée gummi bears marzipan. Cupcake gummi bears gingerbread pastry marzipan chocolate jujubes pie. Chupa chups chupa chups gingerbread cotton candy. Gingerbread gingerbread cookie. Carrot cake dessert jelly beans dragée pastry. Apple pie sugar plum pastry. Sweet dessert donut. Topping fruitcake soufflé pastry.',
    'Pie macaroon biscuit donut croissant apple pie wafer. Liquorice lemon drops tart candy canes sugar plum biscuit. Powder tootsie roll ice cream cake cheesecake chocolate bar jelly-o. Dragée pudding macaroon jelly beans. Jujubes sweet sweet roll candy canes marshmallow cotton candy. Sugar plum tart macaroon lemon drops. Jelly-o sweet dessert muffin jelly beans. Cheesecake cupcake danish croissant jelly beans chocolate cake tootsie roll liquorice. Jelly cake bonbon macaroon lollipop marshmallow jelly beans carrot cake halvah.',
    'Gingerbread sesame snaps tiramisu pudding candy canes cake chocolate cake croissant. Marzipan brownie jelly beans fruitcake chocolate donut. Sesame snaps gingerbread jelly candy dessert chupa chups candy. Croissant sweet pie chupa chups liquorice sesame snaps jelly beans marshmallow carrot cake. Bonbon halvah topping brownie. Icing apple pie tart marshmallow pie fruitcake jelly.',
    'Lollipop muffin tiramisu. Bear claw brownie pastry. Lemon drops toffee chocolate cake. Muffin pie apple pie. Marzipan marshmallow lemon drops. Wafer marzipan caramels gingerbread marshmallow.',
    'Jelly tiramisu bear claw sugar plum. Chupa chups sugar plum topping croissant caramels cake chupa chups. Tootsie roll wafer lemon drops. Cheesecake powder wafer pie tart pie. Jujubes candy canes chocolate icing soufflé tootsie roll. Fruitcake topping soufflé danish.',
    'Chocolate bar caramels donut pudding dragée pastry oat cake dragée cotton candy. Liquorice jelly-o apple pie chupa chups lollipop jelly beans brownie. Donut oat cake bonbon. Sweet chocolate bar marshmallow. Biscuit chocolate toffee gummies jelly beans. Oat cake chupa chups pie toffee icing cupcake chupa chups gingerbread cake. Tart tootsie roll lemon drops. Chocolate bar lollipop cake lollipop chupa chups bear claw. Sesame snaps tootsie roll brownie lollipop jelly powder pudding.',
];

//selecting elements
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * dummyText.length);

    //for empty, negative and greater than 9
    if(isNaN(value) || value <=0 || value>9){
        result.innerHTML = `<p>${dummyText[random]}</p>`;
    }else{
        const sliceArray = dummyText.slice(0, value);
        const finalArray = sliceArray.map(function(singleDummy){
            return `<p>${singleDummy}</p>`;
        }).join('');

        //display final dummy text
        result.innerHTML = finalArray;
    }
});