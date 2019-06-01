function func(){
    const raw_csvdata = document.main_form.iidxcsv.value
    let iidxdata = [];
    let temp = raw.csvdata.split("\n")
    for(let i=0;i<temp.length;i++){
        iidxdata[i] = temp[i].split(",");
    }

    document.getElementById("result").innerHTML = iidxdata[100]
}