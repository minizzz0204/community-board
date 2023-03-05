import React from "react";
import './App.css';
import Card from './components/Card.jsx';

const App = () => {
    return (
        <div className="Row">
          <img src="../static/683071.png" className="MainImg"></img>
          <h1>Food Truck Favorite</h1>
          <Card img='https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' name='Birria-Landia' type='Mexican'/>
          <Card img='https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' name='Mysttik Masala' type='Indian'/>
          <Card img='https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' name='The Halal Guys' type='Middle Eastern'/>
          <Card img='https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg' name='NY Dosas' type='Vegetarian'/>
          <Card img='https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' name='Jerk Pan' type='Jamaican'/>
          <Card img='https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg' name='Tong' type='Bangladeshi'/>
          <Card img='https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg' name='King Souvlaki of Astoria' type='Greek'/>
          <Card img='https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg' name='Ling\" Sweet Mini Cakes' type='Chinese'/>
          <Card img='https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg' name='Uncle Gussy\"s' type='Greek'/>
          <Card img='https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png' name='Mom/"s Mono' type='Tibetan'/>
        </div> 
    )
}

export default App