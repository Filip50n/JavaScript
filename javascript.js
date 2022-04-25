function test(){
    console.log("zaczynamy")
}

// -----------------------------------------------------------  == vs ===  --------------------------------------------------------

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

//-------------------------------------------- Operatory && (AND) oraz || (OR) ----------------------------------------------

function operatoryAndorazOR(){
    console.log("operatory AND (&&) oraz OR (||)")
    // ---------------------------------------- Operatory logiczne --------------------------------------------------------

    // Operator to funkcja która bierze 2 parametry (... && ... lub ... || ...) i zwraca jakiś wynik (TRUE lub FALSE)
    // najczęstrzy przykład możemy zauwazyć przy instrukcjach warunkowych (IF)
    
    if(true && true){
        console.log('to jest TRUE')
    }
    //nasz wynik: to jest TRUE

    if(true && false){
        console.log('to jest TRUE')
    }
    // nasz wynik: 

    // w przypadku użycia operatorów && wszystkie parametry (po lewej i prawej) muszą zaostać spełnione. Wszystkie muszą mieć wartość TRUE
    // natomiast w przypadku użycia operatorów || wystarczy że jeden z parametrów (lewy lub prawy) musi zostać spełniony. Wystarczy że jeden parametr będzie miał wartość TRUE

    if(false || true) console.log('trochę TRUE')
    //nasz wynik: trochę TRUE

    if(true || true) console.log('trochę TRUE')
    //nasz wynik: trochę TRUE

    if(false || false) console.log('trochę TRUE')
    //nasz wynik:

    const a = true && true      //TRUE
    const b = false && true     //FALSE
    const c = true && false     //FALSE
    const d = false && false    //FALSE

    const e = true || true      //TRUE
    const f = false || true     //TRUE
    const g = true || false     //TRUE
    const h = false || false    //FALSE


    // -------------------------------------------------------- ZASADA DZIAŁANIA ------------------------------------------------------------------------
    // jednak zasada działania tego typu zagadnień w javascript jest trochę inna. Program kończy prace na ostatnim parametrze który spełnia wymagania
    // const a = -(w tym miejscu program rozpoczyna sprawdzanie)> true -(pierwszy wartunek został spełniony więc przechodzi dalej)> && -(sprawdzany jest również drugi parametr)> true -(tu również mamy TRUE więc wynik jaki otrzymamy na końcu to TRUE)>   ===>   TRUE
    // const b = -(w tym miejscu program rozpoczyna sprawdzanie)> false -(pierwszy wartunek niezostał spełniony więc nie ma potrzeby iść dalej. PROGRAM SIĘ ZATRZYMUJE)> && true    ===>   FALSE
    // const c = -(w tym miejscu program rozpoczyna sprawdzanie)> true -(pierwszy wartunek został spełniony więc przechodzi dalej)> && -(sprawdzany jest również drugi parametr)> false -(drugi wartunek niezostał spełniony więc nie ma potrzeby iść dalej. PROGRAM SIĘ ZATRZYMUJE)>   ===>   FALSE
    // const d = -(w tym miejscu program rozpoczyna sprawdzanie)> false -(pierwszy wartunek niezostał spełniony więc nie ma potrzeby iść dalej. PROGRAM SIĘ ZATRZYMUJE)> && false    ===>   FALSE

    // widzimy że w tym przypadku przy wykryciu pierwszego parametru z wartoscią FALSE program zostaje zatrzymany i nie jest wykonywany ani sprawdzany kolejny warunek
    // jest to istotnę ponieważ gdyby w drugim warunku była jakaś opreracja to nie dojdzie ona do skutku ponieważ nie zostanie wykonana

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // w przypadku mieszania typów zmiennych czyli w przypadku wykorzystania 0 oraz wykorzystania operatora && zostanie zwrócone 0

    // 0 && true
    // nasz wynik: 0

    // true && 0
    // nasz wynik: 0

    // false && 0
    // nasz wynik: false

    // sytuacja ta występuje dlatego że javascript wykrył 0 jako wartość FALSE następnie zatrzymał sie w tym miejscu oraz zwrócił
    // ostatni parametr jaki był przez niego sprawdzany w tym przypadku było to 0

    // analogiczna sytuacja wygląda z parametrem przyjmującym wartość pustą (NULL)

    // null && true
    // nasz wynik: null

    // true && null
    // nasz wynik: null

    // false && null
    // nasz wynik: false
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // OPERATORY AND ORAZ OR TAK NAPRAWDĘ NIE ZWRACAJĄ NAM WARTOŚCI TRUE LUB FALSE ZWRACANA ZOSTAJE WARTOŚĆ NA KTÓREJ PROGRAM SIĘ ZATCZYMA
    // TO ZNACZY ŻE ZOSTANIE ZWRÓCONA WARTOŚĆ OSTATNIEGO SPRAWDZANEGO ELEMENTU

    // ---------------------------------------------------- w jaki sposób javascript rozpoznaje wartości TRUE/FALSE ---------------------------------------------------------
    // javascript nie sprawdza bezpośrednio czy wartość bezpośrednio przyjmuje cechę TRUE lub FALSE
    // sprawdzane jest czy wartość jest TRUTHY lub FALSY
    // czyli czy wartość jest prawdziwa lub fałszywa

    // WSZYSTKIE WARTOŚCI SĄ PRAWDZIWE POZA KILKOMA WYJĄTKAMI:
    // POZA (poza tymi które są fałszywe xD):
    // - null
    // - NaN
    // - 0
    // - '' lub ""
    // - undefined
    // tylko te 5 wartości są fałszywe wszystkie pozostałe są PRAWDZIWE i będą tak odczywytwane

    // jeśli chcielibyśmy sprawdzić czy dana wartość jest prawdziwa bądź fałszywa musimy wykorzystać konwersję sprawdzanego elementu na typ BOOLEAN
    // Boolean('interesujący nas parametr')

    // Boolean(2)
    // nasz wynik: true

    // Boolean('hello')
    // nasz wynik: true

    // 2 && 'hello'
    // nasz wynik: hello

    // wartość prawdziwa to taka wartość którą możemy za pomocą konwersji na typ BOOLEAN przekonwertować na TRUE
    // natomiast wartośc fałszywa to taka wartość którą za pomocą konwersji na typ BOOLEAN możemy przekonwertować na FALSE

    // Boolean(null)
    // nasz wynik: false

    // Boolean('')
    // nasz wynik: false

    // Boolean(' ')  [SPACJA]
    // nasz wynik: true

    // Boolean(-3)
    // nasz wynik: true

    // jednak należy pamiętać że gdy wykorzystamy to w przykładzie następującym 
    if([]) console.log(1)
    // nasz wynik: 1

    // if sprawdza nam czy wartość podana jest prawdziwa lub fałszywa i w takim wypadku wartość jest prawdziwa więc if się wykona
    // jednak jeśli użyjemy operatora == oraz przyrówanmy to do TRUE w tym wypadku if się nie wykona

    if([] == true) console.log(1)
    // nasz wynik: 
    // jednak tutaj występuje zjawisko KOERCJA TYPÓW z którego wynika że podane porównanie nie jest prawdziwe więc zostanie zwrócona wartość FALSE

    if([] && true) console.log(1)
    // nasz wynik: 1
    // PODCZAS WYWOŁYWANIA OPERATORA && NIE NASTĘPUJE KOERACJA TYPÓW

    const loggedUser = {name: 'Filip'}
    const userName = loggedUser.name
    console.log(userName)
    // nasz wynik: Filip

    // const loggedUser1 = null
    // const userName1 = loggedUser1.name
    // console.log(userName1)
    // W TYM MOMENCIE UTRZYMAMY BŁĄD PONIEWAŻ NIE MOŻEMY ODCZYTAĆ WAROŚCI NAME Z OBIEKTU NAME

    const loggedUser2 = null
    const userName2 = loggedUser2 && loggedUser2.name
    console.log(userName2)
    // nasz wynik: null
    // NIE MA BŁĘDU 

    const loggedUser3 = null
    const userName3 = loggedUser3 && loggedUser3.name || 'nie podano imienia'               //---------|
    //const userName3 = null || 'nie podano imienia'                                            <------|
    console.log(userName3)
    // nasz wynik: nie podano imienia

    const loggedUser4 = {name: 'Filip'}
    const userName4 = loggedUser4 && loggedUser4.name || 'nie podano imienia' 
    console.log(userName4)
    // nasz wynik: Filip

    const userMoney = 10
    console.log(userMoney)
    // nasz wynik: 10

    const userMoney1 = null
    console.log(userMoney1)
    // nasz wynik: null

    const userMoney2 = null
    console.log(userMoney2 || 'nie masz nic na koncie')
    // nasz wynik: nie masz nic na koncie
    // przy tym przykładnie jednak należy pamiętać że wartość 0 jest wartością fałszywą czyli w przypadku gdy userMoney2 miało by wartośc 0 wyświetlony został by komunikat 'nie masz nic na koncie'

    isLogged()                  // funkcja sprawdzająca czy użytkownik jest zalogowoany (zwraca TRUE lub FALSE)
    redirectToHomepage()        //funkcja która przekieruje użytkownika na strone główną

    const isLogged = isLogged()
    if(!isLogged){
        redirectToHomepage()
    }
    // funkcja która sprawdza czy użytkownik jest zalogowany.
    // w przypadku użytkownika który nie jest zalogowany zostanie on przekierowany do strony głównej
    
    isLogged() || redirectToHomepage()
    // ta funkcja robi dokładnie to samo co powyższy if 

}