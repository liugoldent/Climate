
let vm = new Vue({
  el: '#app',
  data: {
    contents: [],
    area: '',
    filter: '',
    final_context: []
  },
  computed: {
    AreaFilter() {
      switch (this.filter) {
        case 'keelung_city':
          console.log(this.filter);
          var name = "七堵";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'taipei_city':
          var name = "士林";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'new_taipei_city':
          var name = "中和";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'taoyuan_country':
          var name = "桃園";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'hsinchu_country':
          var name = "新竹市東區";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'miaoli_country':
          var name = "竹南";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'taichung_city':
          var name = "西屯";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'changhua_country':
          var name = "員林";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'yunlin_country':
          var name = "虎尾";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'chiayi_country':
          //嘉義縣
          var name = "民雄";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'chiayi_city':
          var name = "嘉義市東區";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'tainan_city':
          var name = "臺南市南區";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'kaohsiung_city':
          var name = "三民";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'pingtung_country':
          var name = "墾丁";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'taitung_country':
          var name = "鹿野";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'hualien_country':
          var name = "吉安光華";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'yilan_country':
          var name = "羅東";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'nantou_country':
          var name = "南投";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'penghu_country':
          var name = "花嶼";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'kinmen_city':
          var name = "金寧";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'lanyu':
          var name = "蘭嶼燈塔";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'Liuqiu':
          var name = "琉球嶼";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context

        case 'GreenIsland':
          var name = "綠島";
          this.final_context = Final_Context_function(this.final_context, this.contents, name)
          return this.final_context
      }
      function Final_Context_function(final_context, contents, name) {
        if (this.final_context == '') {
        } else {
          for (var j = 0; j < contents.length; j++) {
            if (contents[j].locationName == name) {
              //console.log('got');
              //console.log(j+1);
              var number = j;
            }
          }

          console.log(number);
          //console.log(contents.length);
          var final_context = [];
          var i = number;

          //console.log(i+1)
          //console.log(contents[i].locationName)
          if (i != undefined) {
            //觀測時間
            final_context[0] = (contents[i].time.obsTime).substring(0, 19);
            //觀測站
            final_context[1] = contents[i].locationName
            //溫度
            final_context[2] = contents[i].weatherElement[3].elementValue;
            //累積雨量
            final_context[3] = contents[i].weatherElement[7].elementValue;
            //當日最高溫度
            final_context[4] = contents[i].weatherElement[11].elementValue;
            //當日最低溫度
            final_context[5] = contents[i].weatherElement[13].elementValue;

            console.log(final_context)
            return final_context
          } else {
            alert("This Data is Empty");
            window.location.reload();
          }
        }
      }
    }
  },
  methods: {
    SelectArea() {
      $("path").mousedown(function (e) {
        var tagname = $(this).attr("data-name");
        vm.filter = tagname;
        //console.log(tagname);
        //console.log(vm.filter)
      })
    }
  },
  mounted() {
    axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314'
                  ,).then((res) => {
      this.contents = res.data.records.location;
      console.log(this.contents)
      //console.log(this.contents[0].weatherElement[6].elementValue)
      //console.log(this.contents[0].locationName);

    })
  }
})


// var width=document.body.clientWidth;
// if(width<663){
//     alert("Your screen is too small. Don't use this app");
//     document.location.href='https://liugoldent.github.io/LgtProfile/profile.html';
// }

var width = document.body.clientWidth;
console.log(width)
if(width<300){
  alert("Your screen is too small. Don't use this app");
  document.location.href='https://liugoldent.github.io/LgtProfile/profile.html';
}else if(300<=width && width<450){
  $('#TaiwanMap').css('width', '45vh')
}else if(450<=width && width<600){
   $('#TaiwanMap').css('width', '45vh')
}else if(600<=width && width<663){
  $('#TaiwanMap').css('width','50vh')
}else if(663<=width && width<1200){
  $('#TaiwanMap').css('width', '70vh')
}else if(1200<=width && width<1500){
  $('#TaiwanMap').css('width', '70vh')
}else if(1500<=width){
   $('#TaiwanMap').css('width', '100vh')
}

//  if (width <= 500 && width > 600){
//   $('#TaiwanMap').css('width','50vh')
// }else if(width<=1200&& width>663){
//   $('#TaiwanMap').css('width', '70vh')
// }else if(width<=1500 && width>1200){
//   $('#TaiwanMap').css('width', '70vh')
// }else if(width>1500){
//    $('#TaiwanMap').css('width', '100vh')
// }else if(width<=600 && width>450){
//    $('#TaiwanMap').css('width', '45vh')
//   alert("Your screen is too small. Don't use this app");
//   document.location.href='https://liugoldent.github.io/LgtProfile/profile.html';
// }else if(width<450){
//    $('#TaiwanMap').css('width', '50vh')
//    alert("If U want to see the Big Map , Please turn your screen Landscape");
//     alert("Your screen is too small. Don't use this app");
//   document.location.href='https://liugoldent.github.io/LgtProfile/profile.html';
// }else if(width<=300){
//   alert("Your screen is too small. Don't use this app");
//   document.location.href='https://liugoldent.github.io/LgtProfile/profile.html';
// }
  
  
