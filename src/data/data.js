import {v4 as uuidv4} from 'uuid';

export const audioData =()=>{
    return([
        {
            id:uuidv4(),
            name:"Rewind",
            cover:"https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg",
            artist:"Sara Ahmadi",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27500",
            color: ["#F9A992","#0E2A37"],
            active:true
        },
        {
            id:uuidv4(),
            name:"Antimidas",
            cover:"https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            artist:"Jahan Shiri",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27501",
            color: ["#181615","#5A3639"],
            active:false
        },
        {
            id:uuidv4(),
            name:"Rewind",
            cover:"https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg",
            artist:"Ali Lohrasbi",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27502",
            color: ["#02A992","#011A37"],
            active:false
        },
        {
            id:uuidv4(),
            name:"Rewind",
            cover:"https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg",
            artist:"Mohammad",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27503",
            color: ["#F9A932","#0E2A97"],
            active:false
        },
        {
            id:uuidv4(),
            name:"Rewind",
            cover:"https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg",
            artist:"Shahram Shabpareh",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27504",
            color: ["#39A992","#6E2A37"],
            active: false
        },
    ])
}