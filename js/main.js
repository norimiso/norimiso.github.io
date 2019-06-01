function func(){
    const raw_csvdata = document.main_form.iidxcsv.value
    let iidxdata = [];
    let temp = raw_csvdata.split("\n")
    for(let i=0;i<temp.length;i++){
        iidxdata[i] = temp[i].split(",");
    }
    const result = iidxdata[100].join("\n")
    document.getElementById("result").innerHTML = result
}