function getCheckList() {
    var huobiFirst = $($('#huibi tr:nth-child(4)').html());
    var cexFirst = $($('#cex tr:nth-child(4)').html());
    var bianFirst = $($('#bian tr:nth-child(4)').html());
    var bitfinexFirst = $($('#bitfinex tr:nth-child(4)').html());
    var bittrexFirst = $($('#bittrex tr:nth-child(4)').html());
    var gateFirst = $($('#gate tr:nth-child(4)').html());
    var okexFirst = $($('#okex tr:nth-child(4)').html());
    var zbFirst = $($('#zb tr:nth-child(4)').html());
    var checkList = [];
    if (typeof huobiFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': '火币',
            'maxBuy': huobiFirst[0].textContent,
            'minSell': huobiFirst[2].textContent
        });
    }
    if (typeof cexFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': 'cex',
            'maxBuy': cexFirst[0].textContent,
            'minSell': cexFirst[2].textContent
        });
    }
    if (typeof bianFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': '币安',
            'maxBuy': bianFirst[0].textContent,
            'minSell': bianFirst[2].textContent
        });
    }
    if (typeof bitfinexFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': 'bitfinex',
            'maxBuy': bitfinexFirst[0].textContent,
            'minSell': bitfinexFirst[2].textContent
        });
    }
    if (typeof bittrexFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': 'bittrex',
            'maxBuy': bittrexFirst[0].textContent,
            'minSell': bittrexFirst[2].textContent
        });
    }
    if (typeof gateFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': 'gate',
            'maxBuy': gateFirst[0].textContent,
            'minSell': gateFirst[2].textContent
        });
    }
    if (typeof okexFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': 'okex',
            'maxBuy': okexFirst[0].textContent,
            'minSell': okexFirst[2].textContent
        });
    }
    if (typeof zbFirst[0] !== 'undefined') {
        //将交易所名,最高收购价,最低出售价加入数组
        checkList.push({
            'name': '中币',
            'maxBuy': zbFirst[0].textContent,
            'minSell': zbFirst[2].textContent
        });
    }

    if(checkList.length > 0){
        console.log(checkList.length)
    }

    return checkList;
}

//依次遍历交易所之间最低售价和最高卖价之间有没有超过最低售价3%的
function checkPrice(checkList) {
    var i=0,j=0;
    var restring = '';
    while (typeof checkList[i] !== 'undefined'){
        console.log(checkList[i]);
        j=i+1;
        while (typeof checkList[j] !== 'undefined'){

            j++;
        }
        i++;
    }
}