$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://finans.truncgil.com/today.json',
        data: {},
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, element) {
                if (index == "Güncelleme Tarihi") {
                    const date = new Date(element)
                    const dateTimeFormat = new Intl.DateTimeFormat('tr', { year: 'numeric', month: 'short', day: '2-digit' })
                    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
                        // $('#updateDate').html(`${month} ${day}  ${year }`);                  
                    var time = element.split(' ')[1];
                    $('#updateDate').html(`${month} ${day}  ${year } ${time}`);
                }
                if (index == "ABD DOLARI") {
                    console.log(element);
                    $('#usdSell').html(element.Satış);
                    $('#usdBuy').html(element.Alış);
                }
                if (index == "EURO") {
                    console.log(element);
                    $('#eurSell').html(element.Satış);
                    $('#eurBuy').html(element.Alış);
                }
                if (index == "İNGİLİZ STERLİNİ") {
                    console.log(element);
                    $('#gbpSell').html(element.Satış);
                    $('#gbpBuy').html(element.Alış);
                }
                if (index == "Gram Altın") {
                    console.log(element);
                    $('#galtSell').html(element.Satış);
                    $('#galtBuy').html(element.Alış);
                }

                if (index == "JAPON YENİ") {
                    console.log(element);
                    $('#japSell').html(element.Satış);
                    $('#japBuy').html(element.Alış);
                }

                if (index == "NORVEÇ KRONU") {
                    console.log(element);
                    $('#norSell').html(element.Satış);
                    $('#norBuy').html(element.Alış);
                }

                if (index == "DANİMARKA KRONU") {
                    console.log(element);
                    $('#danSell').html(element.Satış);
                    $('#danBuy').html(element.Alış);
                }

                if (index == "İSVEÇ KRONU") {
                    console.log(element);
                    $('#isvSell').html(element.Satış);
                    $('#isvBuy').html(element.Alış);
                }

                if (index == "ÇİN YUANI") {
                    console.log(element);
                    $('#cinSell').html(element.Satış);
                    $('#cinBuy').html(element.Alış);
                }

                if (index == "SUUDİ ARABİSTAN RİYALİ") {
                    console.log(element);
                    $('#sarSell').html(element.Satış);
                    $('#sarBuy').html(element.Alış);
                }
            });
        }
    });
});