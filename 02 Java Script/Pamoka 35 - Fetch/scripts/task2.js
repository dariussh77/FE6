export default class Lentele{
    constructor(){
        return this.fLentele();
    }
    fLentele(){
       fetch('https://magnetic-melon-yam.glitch.me')
        .then(e=>e.json())
        .then(data=>{
            console.log(data);
            this.section=document.querySelector('#lentele');

            this.label=document.createElement('label');
            this.label.setAttribute('name','check');
            this.labelText=document.createTextNode('Atrinkti VIP:');
            this.label.append(this.labelText);
            this.checkbox=document.createElement('input');
            this.checkbox.setAttribute('type','checkbox');
            this.checkbox.setAttribute('name','check');
            this.checkbox.setAttribute('id','check');



            this.div=document.createElement('div');
            this.table=document.createElement('table');
            this.caption=document.createElement('caption');
            this.captionName=document.createTextNode('Mėgstamos spalvos');
            this.caption.append(this.captionName);
            this.thead=document.createElement('thead');
            this.trH=document.createElement('tr');

            this.thId=document.createElement('th');
            this.thPhoto=document.createElement('th');
            this.thName=document.createElement('th');
            this.thSurname=document.createElement('th');
            this.thCity=document.createElement('th');
            this.thColor=document.createElement('th');

            this.thIdText=document.createTextNode('ID');
            this.thPhotoText=document.createTextNode('Photo');
            this.thNameText=document.createTextNode('Name');
            this.thSurnameText=document.createTextNode('Surname');
            this.thCityText=document.createTextNode('City');
            this.thColorText=document.createTextNode('Favorite Color');
            this.thId.append(this.thIdText);
            this.thPhoto.append(this.thPhotoText);
            this.thName.append(this.thNameText);
            this.thSurname.append(this.thSurnameText);
            this.thCity.append(this.thCityText);
            this.thColor.append(this.thColorText);
            this.trH.append(this.thId,this.thPhoto,this.thName,this.thSurname,this.thCity,this.thColor);
            this.thead.append(this.trH);

            this.tbody=document.createElement('tbody');
            this.tbody.setAttribute('id','tbody');
            
            this.tdAll=data.forEach(e => {
                let trB=document.createElement('tr')
                let tdId=document.createElement('td');
                let tdIdText=document.createTextNode(e.id);
                tdId.append(tdIdText);

                let tdPhoto=document.createElement('td');
                let tdPhotoImg=document.createElement('img');
                tdPhotoImg.setAttribute('src',e.image);
                tdPhotoImg.setAttribute('alt','Photo');
                tdPhoto.append(tdPhotoImg);


                let tdName=document.createElement('td');
                let tdNameText=document.createTextNode(e.name.split(' ')[0]); //sliptintas Vardas pavarde
                tdName.append(tdNameText);
                let tdSurname=document.createElement('td');
                let tdSurnameText=document.createTextNode(e.name.split(' ')[1]);//sliptintas Vardas pavarde
                tdSurname.append(tdSurnameText);
                let tdCity=document.createElement('td');
                let tdCityText=document.createTextNode(e.city);
                tdCity.append(tdCityText);
                let tdColor=document.createElement('td');
                let tdColorText=document.createTextNode(e.fav_color);
                tdColor.append(tdColorText);
                trB.append(tdId,tdPhoto,tdName,tdSurname,tdCity,tdColor);

               

                this.tbody.append(trB);
            });
            this.table.append(this.caption,this.thead,this.tbody)
            this.div.append(this.table);
            this.section.append(this.label,this.checkbox,this.div);



            
            this.checkboxQuary=document.querySelector('#check');
            this.checkboxQuary.addEventListener('click',(e=>{
                console.log(e);
                if(e.target.checked){
                    console.log('!!!!!!!!!!!!!!!!!!!!!!');
                    this.div.remove();
                    this.section=document.querySelector('#lentele');



                    this.div=document.createElement('div');
                    this.table=document.createElement('table');
                    this.caption=document.createElement('caption');
                    this.captionName=document.createTextNode('Mėgstamos spalvos');
                    this.caption.append(this.captionName);
                    this.thead=document.createElement('thead');
                    this.trH=document.createElement('tr');

                    this.thId=document.createElement('th');
                    this.thPhoto=document.createElement('th');
                    this.thName=document.createElement('th');
                    this.thSurname=document.createElement('th');
                    this.thCity=document.createElement('th');
                    this.thColor=document.createElement('th');

                    this.thIdText=document.createTextNode('ID');
                    this.thPhotoText=document.createTextNode('Photo');
                    this.thNameText=document.createTextNode('Name');
                    this.thSurnameText=document.createTextNode('Surname');
                    this.thCityText=document.createTextNode('City');
                    this.thColorText=document.createTextNode('Favorite Color');
                    this.thId.append(this.thIdText);
                    this.thPhoto.append(this.thPhotoText);
                    this.thName.append(this.thNameText);
                    this.thSurname.append(this.thSurnameText);
                    this.thCity.append(this.thCityText);
                    this.thColor.append(this.thColorText);
                    this.trH.append(this.thId,this.thPhoto,this.thName,this.thSurname,this.thCity,this.thColor);
                    this.thead.append(this.trH);

            this.tbody=document.createElement('tbody');
            this.tbody.setAttribute('id','tbody');
            this.vipData=data.filter(e=>e.vip);
            this.tdAll=this.vipData.forEach(e => {
                let trB=document.createElement('tr')
                let tdId=document.createElement('td');
                let tdIdText=document.createTextNode(e.id);
                tdId.append(tdIdText);

                let tdPhoto=document.createElement('td');
                let tdPhotoImg=document.createElement('img');
                tdPhotoImg.setAttribute('src',e.image);
                tdPhotoImg.setAttribute('alt','Photo');
                tdPhoto.append(tdPhotoImg);


                let tdName=document.createElement('td');
                let tdNameText=document.createTextNode(e.name.split(' ')[0]); //sliptintas Vardas pavarde
                tdName.append(tdNameText);
                let tdSurname=document.createElement('td');
                let tdSurnameText=document.createTextNode(e.name.split(' ')[1]);//sliptintas Vardas pavarde
                tdSurname.append(tdSurnameText);
                let tdCity=document.createElement('td');
                let tdCityText=document.createTextNode(e.city);
                tdCity.append(tdCityText);
                let tdColor=document.createElement('td');
                let tdColorText=document.createTextNode(e.fav_color);
                tdColor.append(tdColorText);
                trB.append(tdId,tdPhoto,tdName,tdSurname,tdCity,tdColor);

               

                this.tbody.append(trB);
            });
            this.table.append(this.caption,this.thead,this.tbody)
            this.div.append(this.table);
            this.section.append(this.label,this.checkbox,this.div);

                }else{
                    this.div.remove();
                    this.section=document.querySelector('#lentele');
        
                    this.div=document.createElement('div');
                    this.table=document.createElement('table');
                    this.caption=document.createElement('caption');
                    this.captionName=document.createTextNode('Mėgstamos spalvos');
                    this.caption.append(this.captionName);
                    this.thead=document.createElement('thead');
                    this.trH=document.createElement('tr');
        
                    this.thId=document.createElement('th');
                    this.thPhoto=document.createElement('th');
                    this.thName=document.createElement('th');
                    this.thSurname=document.createElement('th');
                    this.thCity=document.createElement('th');
                    this.thColor=document.createElement('th');
        
                    this.thIdText=document.createTextNode('ID');
                    this.thPhotoText=document.createTextNode('Photo');
                    this.thNameText=document.createTextNode('Name');
                    this.thSurnameText=document.createTextNode('Surname');
                    this.thCityText=document.createTextNode('City');
                    this.thColorText=document.createTextNode('Favorite Color');
                    this.thId.append(this.thIdText);
                    this.thPhoto.append(this.thPhotoText);
                    this.thName.append(this.thNameText);
                    this.thSurname.append(this.thSurnameText);
                    this.thCity.append(this.thCityText);
                    this.thColor.append(this.thColorText);
                    this.trH.append(this.thId,this.thPhoto,this.thName,this.thSurname,this.thCity,this.thColor);
                    this.thead.append(this.trH);
        
                    this.tbody=document.createElement('tbody');
                    this.tbody.setAttribute('id','tbody');
                    
                    this.tdAll=data.forEach(e => {
                        let trB=document.createElement('tr')
                        let tdId=document.createElement('td');
                        let tdIdText=document.createTextNode(e.id);
                        tdId.append(tdIdText);
        
                        let tdPhoto=document.createElement('td');
                        let tdPhotoImg=document.createElement('img');
                        tdPhotoImg.setAttribute('src',e.image);
                        tdPhotoImg.setAttribute('alt','Photo');
                        tdPhoto.append(tdPhotoImg);
        
        
                        let tdName=document.createElement('td');
                        let tdNameText=document.createTextNode(e.name.split(' ')[0]); //sliptintas Vardas pavarde
                        tdName.append(tdNameText);
                        let tdSurname=document.createElement('td');
                        let tdSurnameText=document.createTextNode(e.name.split(' ')[1]);//sliptintas Vardas pavarde
                        tdSurname.append(tdSurnameText);
                        let tdCity=document.createElement('td');
                        let tdCityText=document.createTextNode(e.city);
                        tdCity.append(tdCityText);
                        let tdColor=document.createElement('td');
                        let tdColorText=document.createTextNode(e.fav_color);
                        tdColor.append(tdColorText);
                        trB.append(tdId,tdPhoto,tdName,tdSurname,tdCity,tdColor);
        
                       
        
                        this.tbody.append(trB);
                    });
                    this.table.append(this.caption,this.thead,this.tbody)
                    this.div.append(this.table);
                    this.section.append(this.label,this.checkbox,this.div);
                }
             
            
            }));
            

        })
    }
};