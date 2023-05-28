export const languages = [
    {
        title: "Apache",

        icon:
            "<img src='/assets/imgs/apache.png' style='width: 25px' class='mr-1' />"
    },
    {
        title: "Nginx",

        icon:
            "<img src='/assets/imgs/nginx.png' style='width: 25px' class='mr-1' />"
    },
    {
        title: "Nodejs",

        icon: "<i class='fab fa-node-js mr-1'</i>"
    },
    {
        title: "Laravel",

        icon: "<i class='fab fa-laravel mr-1'</i>"
    },
    {
        title: "Angular",

        icon: "<i class='fab fa-angular mr-1'</i>"
    },
    {
        title: "React",

        icon: "<i class='fab fa-react mr-1'</i>"
    },
    {
        title: "NativeScript",

        icon: "<img src='/assets/imgs/ns.png' style='width: 25px' class='mr-1' />"
    },
    {
        title: "Flutter",

        icon:
            "<img src='/assets/imgs/flutter.png' style='width: 25px' class='mr-1' />"
    }
];
export const languagesHash = {}

languages.forEach(language => {
    languagesHash[language.title] =  language ;
});



export const roles = [
    "Computer Engineer",
    "Programmer",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Machine Learning Expert",
    "Data Scientist"
];
export const writes = [
    "Web applications",
    "Desktop applications",
    "Algorithims",
    "Mobile Apps",
    "Machine Learning Models",

];


export const projects = [

    {
        title: "Sharedrop",
        url: "http://sharedropng.herokuapp.com",
        discription: "OnlineTax.com.ng",
        src:"/assets/imgs/projects/sharedrop.jpg",
        tech: [
            languagesHash["Nginx"],
            languagesHash["Nodejs"],
            languagesHash["React"]
        ]
    },
    {
        title: "Cvng",
        url: "http://cvngayotycoon.herokuapp.com",
        discription: "OnlineTax.com.ng",
        src:"/assets/imgs/projects/cvng.jpg",
        tech: [
            languagesHash["Nginx"],
            languagesHash["Nodejs"],
            languagesHash["Angular"]
        ]
    },
    {
        title: "GpCalc",
        url:
            "https://play.google.com/store/apps/details?id=com.andriod.gpcalc&hl=en",
        discription: "OnlineTax.com.ng",
        src:"/assets/imgs/projects/gpcalcandroid.jpg",
        tech: [
            languagesHash["NativeScript"],
            languagesHash["Angular"]
        ]
    }
];