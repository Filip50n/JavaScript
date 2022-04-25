function test(){
    console.log("zaczynamy")
}

// ----------------------------------------  == vs ===  ------------------------------

//Operatory porównania

function operatoryPorownania(){
    console.log("operatory porównania == vs ===")
    // JavaScript to język z dynamicznym typowaniem - oznacza to że Java w żaden sposób nie ustala zmiennej np a od razu typu np Number czyli że jest liczbą 
    // (np w zwykłej Javie definiujemy to np za pomocą inicjalizacji int/string ... itd) typ zostaje dopiero rozpoznany za pomocą tego co zostało do danej zmiennej przypisane
    // !!! W TRAKCIE DZIAŁANIA PROGRAMU TYP ZMIENNEJ MOŻE SIĘ ZMIENIĆ !!!
    // let a = 1
    // let a = "napis"
    // let a = 2
    // let a = "99"
    // widzimy że typowanie zmiennej jest dynamiczne i może ulec zmianie podczas np działania programu
    
    //------------------------------------------------ == -------------------------------------------------------------
    // KOERCJA TYPÓW - jest to zmiana typu warości na inny typ (przykładowo '1' => 1)

    // 1. 1 == 1                        => return 1 === 1                       <---|
    // 2. null == undefined             => return true                              |
    // 3. undefined == null             => return true                              |
    // 4. 1 == '1'                      => return 1 == Number('1')               ---|
    // 5. '1' == 1                      => return Number('1') == 1               ---|
    // 6. true == ...                   => return Number(true) == ...            ---|
    // 7. ... == true                   => return Number(true) == ...            ---|
    // 8. "1" == Object()               => return '1' == ToPrimitive(Object)     ---|
    // 9. Object() == "1"               => return ToPrimitive(Object) == '1'     ---|
    // return FALSE

    // '1' => 1
    // true => 1
    // false => 0
    // koercja typów jest aktywna dlatego:
    // '2' == 2 (TRUE)
    // true == 1 (TRUE)
    // false == 0 (TRUE)
    // następuje zmiana tego typu w kilku określonych korkach:

    // 1. Sprawdzenie czy 1 wartość jest taka sama jak 2 <- sprawdzane jest czy typ pierwszej wartości jest taki sam jak typ drugiej wartości (NUMBER = NUMBER)
    // jeśli typ jest taki sam to zostaje zwrócone porówanie (1 === 1)

    // 2. null == undefined <- wyjątek poprzez koercje zwracane jest true i należy to zapamiętać
    // null == undefined (TRUE)

    // 3.sprawdzana jest odwrotność: (kwestia do zapamiętania) (odwrotność 2)
    // undefined == null (TRUE)

    // 4.sprawdzane jest czy 1 argument jest liczbą a drugi jest stringiem jeżeli javascript stara się zmienić typ 2 parametru na taki który odpowiada typowi 1 parametru
    // 1 == '1' (STRING >> NUMBER | '1' -> 1)                                   1 == Number('1')
    // Number('1') = 1
    // otrzymujemy :
    // 1 == 1
    // po dojściu do tego momentu koercja zaczyna się od początku i wykona tyle iteracji do póki otrzymamy wartość TRUE lub FALSE

    // 5.sprawdzane jest czy 2 argument jest liczbą a 1 jest stringiem jeżeli javascript stara się zmienić typ 1 parametru na taki który odpowiada typowi 2 parametru (odwrotność 4)
    // '1' == 1 (STRING >> NUMBER | '1' -> 1)                                   1 == Number('1')
    // Number('1') = 1
    // otrzymujemy :
    // 1 == 1
    // po dojściu do tego momentu koercja zaczyna się od początku i wykona tyle iteracji do póki otrzymamy wartość TRUE lub FALSE 
    
    // 6. w tym kroku sprawdzane jest czy pierwsza warość jest boolean a druga jest czym kolwiek
    // true == ...
    // w tym momencie javascript zwraca nam: Number(true) == ... czyli następuje próba zamiany parametru TRUE na NUMBER (Number(true) = 1)
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // WAŻNE PRZY PORÓWNYWANIU STRINGA NP ("hello") W TYM KROKU OTRZYMAMY WARTOŚĆ NAN
    // typ Nan to "number" PRZYKŁAD:
    // true == 'tekst'
    // 1 == 'tekst'
    // 1 == Number('tekst')
    // 1 == NaN
    // typeof NaN (NUMBER)
    // CIEKAWOSTKA NaN =/= NaN  <- zmiena NaN nie równa się nawet sama sobie
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // 7. w tym kroku sprawdzane jest czy druga warość jest boolean a pierwsza jest czym kolwiek (odwrotność 6)
    // ... == true

    // 8. sprawdzenie czy 1 typ jest liczbą stringiem lub czymś innym natomiast czy 2 jest Obiektem
    // "1" == Object()
    // w javascript wszystko co nie jest typem prymitywnym jest obiektem
    // typ prymitywny - string, liczba, boolean
    // w tym kroku javascript próbuje przekształcić obiekt do wartości prytmitywnej
    // [0,2] - nasz obiekt
    // [0,2].toString() => "0,2"
    // '0,2' == [0,2]   -|
    // '0,2' == '0,2'   <|
    // nasz wynik to TRUE
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // typeof {}  => "object"
    // false == {}
    // false == 'object'
    // 0 == 'object'
    // 0 == NaN
    // 0 === NaN
    // nasz wynik to FALSE

    // [].toString() => ""
    // false == []
    // flase == ''
    // 0 == ''
    // 0 == 0
    // 0 === 0 
    // nasz wynik to TRUE
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // 9. sprawdzenie czy 2 typ jest liczbą stringiem lub czymś innym natomiast czy 1 jest Obiektem (odwrotność 8)

    // 10. jeśli żaden z wyżej wymienionych kroków nie mógł zostać wykonany zwracana jest wartość FALSE
    // PRZYKŁAD:
    // 1 == null
    // nasz wynik to FALSE
    // poniważ żaden z wymienionych kroków nie został wykonany
    // 0 == null
    // nasz wynik to FALSE
    // poniważ żaden z wymienionych kroków nie został wykonany

    //----------------------------------------------- === -------------------------------------------------------------
    // przy użyciu tego operatora mówimy javasciptowi aby sprawdził czy porównywane dwie wartości są IDENTYCZNE 
    // 2 === 2 (TRUE)
    // "2" === 2 (FALSE) <- inny typ ("2" - string | 2 - number)
    // true === 1 (FALSE) <- 1 nie równa się warotści true (to nie jest to samo ponieważ sprawdzany jest typ danych)
    // ! ZAWSZE PO OBYDWU STRONACH MUSI ZNAJDOWAĆ SIĘ TA SAMA WARTOŚĆ !
    // Koercja typów nie występuje
}