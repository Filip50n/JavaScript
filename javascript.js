function test(){
    console.log("zaczynamy")
}

// -----------------------------------------------------------  == vs ===  --------------------------------------------------------

//Operatory porównania

function operatoryPorownania(){
    console.log("operatory porównania == vs ===")
    // JavaScript to język z dynamicznym typowaniem - oznacza to że JavaScript w żaden sposób nie ustala zmiennej np a od razu typu np Number czyli że jest liczbą 
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

function sredniki(){
    console.log("średniki")

    // w javascript średniki nie są obowiązkowe
    // średniki służą do tego aby zakomunikować porgramowi koniec pewnej instrukcji oraz przejście do kolejnej instrukcji
    // dzięki wykorzystniu średników nasz interpreter wie gdzie kończy się dana instrukcja a zacznyna nowa
    // jednak javascript dane nam narzędzie o nazwię Automatic Semicolon Insertion (ASI) czyli automatyczne wstawianie średników
    // poprzez wykorzystanie tego narzędzia program jakby stara się przewidzieć w którym miejscu kończy sie dana instrukcja a nastepnie traktuje to tak jak gdyby tam był średnik
    
    // Zasady które wykorzystuje ASI przy automatycznym generowaniu średników:
    // 1. a) Jeżeli program trafi na coś co gramatycznie nie pasuje w danej lini kodu jednak pomiedzy tym jest znak nowej lini wtedy wstawia średnik
    const a = 2
    const b = 2

    // jest przez program postrzegane jako
    // const a = 2;
    // const b = 2;

    // a nie 
    // const a = 2const b = 2

    // jednak jeśli mamy sytuacje gdzie kod zostanie przez nas napisany w następujący sposób
    // const a = 2                  const b = 2
    // nadal zostanie zwrócony błąd ponieważ nie ma znaku przejścia do nowej lini (ENTER)

    // 1. b) Jeśli trafi na niepasujący znak to "}" w takim przypadku również zostanie wstawiony średnik nawet gdy nie bedzie przejścia do nowej lini (ENTER)

    function test(){
        const a = 3
    }

    // istnieją strony takie jak BABEL które potrafią przekonwertować nasz kod dodając średniki ponieważ starsze przeglądarki mogą nie wspierać ASI

    // 2. Na końcu pliku

    // 3. a) Jeżeli po instrukcjach typu continue, break, throw, return jest nowa linia (ENTER) również wstawiany jest średnik

    function test1(){
        return 2
    }

    // przez przeglądarke otrzymamy
    // function test1(){
    //     return 2;
    // }

    // JEDNAK NALEZY TUTAJ UWAŻAĆ PONIEWAŻ JEŚLI JEST PRZEJŚCIE DO NOWEJ LINI TO ŚREDNIK I TAK ZOSTANIE WSTAWIONY

    function test2(){
        return 
        2
    }

    // przez przeglądarke otrzymamy
    // function test2(){
    //     return ;
    //     2;
    // }
    // w tym przypadku funkcja zwróciła by nam UNDEFINED

    function test2(){
        return 
        {
            name: 'Filip'
        }
    }

    // przez przeglądarke otrzymamy
    // function test2(){
    //     return; 
    //     {
    //         name: 'Filip';
    //     }
    // }
    // w tym przypadku funkcja również zwróciła by nam UNDEFINED więc należy o tym pamiętać jednak dodawanie średników recznie również nas przed niczym nie uchroni ponieważ średnik znajdzie się i tak w tym miejscu

    // należy pamiętać że działanie ASI to nie jest coś co możemy wyłączyć program i tak bedzie z niego korzystał

    // to co chcemy zwracać po słówku RETRUN zawsze musi się zaczynać zaraz po nim poniważ w innym przypadku ASI wstawi nam tam średnik

    function test2(){
        return {
            name: 'Filip'
        }
    }

    // przez przeglądarke otrzymamy
    // function test2(){
    //     return {
    //         name: 'Filip';
    //     }
    // }

    // 3. b) Jeżeli nie ma przejścia do nowej lini ale kolejnym znakiem jest znak "}" to zostanie wstawiony średnik

    // ASI niesie ze sobą kilka niebiezpieczeńst przede wszystkim to to aby po słówku RETURN nie wstawiać znaku nowej lini (ENTER) jest coś zweracane to musi być w tej samej lini
    //w przykładzie:

    const c = 3
    [1,2,3].map()

    // przez przeglądarke otrzymamy
    // const c = 3[1,2,3].map();
    // w tym przypadku średnik nie zostanie wstawiony ponieważ powyższy przykład jest gramatycznie poprawny
    // rozwiązaniem tego problemu może być używanie średnika przed znakiem "[" jeżeli jest to pierwszy znak w naszej nowej lini
    // const c = 3
    // ;[1,2,3].map()

    function test3(){}
    test3()

    const d = 3
    (2+3)

    // przez przeglądarke otrzymamy
    // function test3(){}
    // test3()

    // const d = 3(2+3)......
    // w tym przypadku również tak samo jak przed nawiasem "[" powiniiśmy postawić przed nawiasem "(" średnik
}

function immediatelyInvokedFunctionExpression(){
    console.log("Natychmiastowo wywołująca się funkcja (IIFE)");
    // ----------------------------------------------------------------- natychmiastowo wywołująca się funkcja --------------------------------------------------------------------------

    //struktura funkcji:
    (() => {
        const name = "Filip"
        console.log('Witaj ' + name)
    })();

    // jest to samo wywołująca się funkcja Immediately-invoked Function Expression (IIFE)
    // jest to funkcja która po uruchomieniu programu sama się wywołuje w efakcie czego po uruchomineiu programu 
    // nasz wynik: hello

    //jednak czym różni się zapis
    (() => {
        console.log('Witaj')
    })();
    
    // od zwykłego zapisu

    console.log('Witaj');

    // pierwszą różnicą jest to że drugi przypadek nie jest funkcją jest to poprostu polecenie w przestrzeni globalnej
    // dzięki wykorzystaniu IIFE możegy zgrupować pewien fragmet kodu i zamknąć go właśnie w jednej samo wywołującej się funkcji pozwala nam to zachować porządek
    // kolejnym plusem jest to że przy tworzeniu pewnych zmiennych nie zaśmiecamy globalnej przestrzeni tymi zmiennymi tylko są one upożądkowane w funkcji

    (() => {
        const name = "Filip"
        console.log('Witaj ' + name)
    })();

    //console.log(name);

    // jednak gdy spróbujemy wywołać wcześniej zdefiniowane name poza funkcją IIFE otrzymamy BŁĄD informujący nas o tym że name nie zostało zdefiniowane
    // co dobrze pokazuje że zmienne tworzone w takiej funkcji są lokalne i nie przechodzą do przestrzeni globalnej dzięki czemu pozwoli to nam jej nie zaśmiecać oraz wyznaczać granice zmiennych takie jakich potrzebujemy

    // zmienne wykoszystywane  w tej funkcji są dostępne tylko w niej. Nie są dostępne poza nią w przestrzeni globalnej
    // może zostać to wykorzystane przy dużym projekcie np 10 skryptów gdzie np w 3 skryptach powtarza się nazwa danej zmiennej w takiej sytuacji jeden skrypt będzie nadpisywał wartość w innym skrypcie
    // poprzez wykorzystanie właśnie takiej funkcji IIFE możemy określić zasięg danej zmiennej i zapobiec takim sytułacją

    // o co chodzi z zapisem czemu wygląda tak nie naturalnie:
    (() => {
        const name = "Filip"
        console.log('Witaj ' + name)
    })();

    // a nie po prostu:
    function funkcjaTestowa(){
        const name = "funkcje testową"
        console.log('Uruchamiam ' + name)
    }

    funkcjaTestowa();
    // to też zadziała identycznie. Jednak to nie jest funkcja która się wykona od razu ponieważ wymagane jest najpierw zapisanie tej funkjcji do pamięci i potem ją wywołać oraz uruchomić
    // w przeciwieństwie do funkcji IIFE gdzie raz ją uruchamiamy i nie jest ona zapisywana do żadnej zmiennej
    
    // możemy również stwożyć funkcjie anonimową jednak wymagane jest również jej przypisanie do jakiejś zmiennej

    const funkcjaTestowa1 = function () {
        const name = "funkcje testową 1"
        console.log('Uruchamiam ' + name)
    }

    funkcjaTestowa1()
    // aplikacja nadal działa tak samo jednak w żaden sposób nam to nie pomogło
    // uruchomienie funkcji anonimowej to wypisanie zmiennej w której jest ona przechowywana a następnie dodanie do niej "()"

    // jednak możemy również wywołać ją w sposób następujący
    const funkcjaTestowa2 = function () {
        const name = "funkcje testową 2"
        console.log('Uruchamiam ' + name)
    }()
    // i to również będzie działać czyli prawie to samo jednak nadal występuje przypisanie funkcji do zmiennej co jest zaśmiecaniem pamięci ponieważ takie zapisanie nie jest czymś czego potrzebujemy i oczekujemy
    
    // function () {
    //     const name = "funkcje testową 2"
    //     console.log('Uruchamiam ' + name)
    // }()
    // jednak wywołanie funkcji w taki sposób już nie będzie działało dlatego że gramatycznie nie jest to już poprawne ponieważ javascript przy wykonywaniu kodu gdy następuje ta linijka nie spodziewa się funkcji anonimowej

    +function () {
        const name = "funkcje testową 3"
        console.log('Uruchamiam ' + name)
    }()

    // jednak niewielka modyfikacja w postaci postawienia znaku "+" przed definicją funkcji naprawia nam ten błąd przez co program uruchomi się
    
    //Aby zrozumieć co się stało i czemu dodanie "+" przed definicją funkcji musimy zrozumieć jak dokładnie działa "+" w javascript

    const number = '1234'
    console.log(number)
    console.log(typeof number)
    // nasz wynik: string
    // podana kod pokazuje nam zawarość zmiennej number oraz typ jaki ta zmienna przechowuje

    const number1 = +'1234'
    console.log(number1)
    console.log(typeof number1)
    // nasz wynik: number    
    // jednak po niewielkiej modyfikacji czyli po dodaniu "+" możemy zauwazyć ze nasz typ zmiennej się zmienił ze STRING na NUMBER
    // więc możemy powiedzieć że dodanie "+" zmieniło typ naszej zmiennej ze STRING-a na NUMEBER (a przynajmniej stara się zmienić)

    const number2 = +'Filip'
    console.log(number2)
    console.log(typeof number2)
    // nasz wynik: NaN
    // nasz wynik: number
    // ponieważ w przypdaku gdy przechowywana zmienna nie jest liczbą zmieni nam wartość NaN jednak typ zmiennej nadal pozostaje jako NUMBER

    // analogiczna sytuacja dzieje się w przypadku użycia symbolu "+" przy definicji funkcji
    +function () {
        const name = "funkcje testową 4"
        console.log('Uruchamiam ' + name)
    }()
    // symbol "+" stara się przekonwertować całą funkcje na liczbe (oczywiście również się nie uda naszym wynikiem będzie NaN) jednak w trakcie kiedy próbuje to przekonwerować jednocześnie ta funkcja musi sie uruchomić
    // w wyniku czego nasza funkcja zostanie uruchomiona

    const test = +function () {
        const name = "funkcje testową 4"
        console.log('Uruchamiam ' + name)
    }()
    console.log(test);
    console.log(typeof test);
    // nasz wynik: NaN
    // nasz wynik: number
    // więc tak jak we wczesniejszym przypadku który zwrócił nam błąd javascript patrzył na deklaracje function i się jej nie spodziewał tak teraz patrzy na całość (włącznie z symbolem "+") próubując zmienić typ na NUMBER

    // funkcja zostaje uruchomiona oraz przekonwertowana na wartość NaN 
    // jednak zmiana funkji na wyrażenie możemy zrobić na kilka różnych sposobów "+" jest jednym z nich możemy również użyć np "-" lub "!" albo "()" w którym znajduje się nasza funkcja

    (function () {
        const name = "funkcje testową 4"
        console.log('Uruchamiam ' + name)
    }())

    // przykładowo jeśli chcielibyśmy zrobic
    const number3 = 2 + 2 * 4
    console.log(number3)
    // nasz wynik: 10
    // nasz wynik to 10 ponieważ pierwsze jest mnożenie a następnie dodawanie jednak gdybyśmy chcieli aby najpierw wykonane zostało dodawanie powiniśmy wziąść je w nawiasy

    const number4 = (2 + 2) * 4
    console.log(number4);
    // nasz wynik: 16
    // jednak "()" to nie jest jedynie zapis matematyczny w javascript nie mówią one że najpierw ma się wykonać dodawanie a potem mnożenie
    // nawiasy działają w taki sposób że wykonywany jest kod który znajduje się wewnątrz a następnie zwraca jego wartość czyli wykona 2 + 2 oraz zwróci 4 a dopiero następnie wyona sie 4 * 4

    // jednak my musimy skupic sie na tym że "()" wykonują kod który znajduje się wewnątrz nich a następnie zwraca jego wartość więc jeśli wewnątrz nawiasów znajdzie się funkcja

    (
        function () {
        const name = "funkcje testową 5"
        console.log('Uruchamiam ' + name)
    }()
    );
    // więc równie dobrze możemy wewnątrz "()" wziąść naszą funkcjie sprawia to że funkcja zostanie wykonana a jej wartośc zostanie zwrócona
    // sprawdźmy zataem co zwrócą "()" gdy wstawimy do nich naszą funkcję

    const test1 = (
        function () {
        const name = "funkcje testową 6"
        console.log('Uruchamiam ' + name)
    }()
    );
    console.log(test1)
    // nasz wynik: undefined
    // zwracany jest UNDEFINED poniewaz nic przez naszą funkcję nie jest zwracane

    const test2 = (
        function () {
        const name = "funkcje testową 7"
        console.log('Uruchamiam ' + name)
        return 9
    }()
    );
    console.log(test2);
    // nasz wynik: 9
    // jednak w przypadku gdy nasza funkcja będzie coś zwracała to wynikiem będzie to co zwraca nasza funkcja znajduąca się pomiędzy "()"
    // jednak nadal w przypadku wstawienia funkcji pomiedzy "()" została ona wykonana. ZOSTAŁA ONA POTRAKTOWANA JAKO WYRAŻENIE
    // funkcja została przez javascript przekonwertowana i zwrócona jako UNDEFINED który sam w sobie nie generuje błędów dzięki czemu nasz kod działa

    // możemy również uprościć nasz zapis kożystając z funkcji strzałkowej
    // (
    //     () => {
    //     const name = "funkcje testową 7"
    //     console.log('Uruchamiam ' + name)
        
    //     }()
    // );
    // jednak w przypadku zastosowania takiego zapisu nagle otrzymujemy błąd taki zapis jest nie zgodny i nie możemy uzyć od razu wyowołania naszej funkcji zaraz po jej deklaracji
    // jednak spróbujmy pominąć ten fakt i spróbujmy usunąć wywołanie funkcji po jej deklaracji oraz sprawdźmy co zostanie zwrócone

    const test3 = (
        () => {
        const name = "funkcje testową 8"
        console.log('Uruchamiam ' + name)
        
        }
    );
    console.log(test3);
    // nasz wynik: [Function: test]
    // w tym momencie zwrócona została po prostu nasza funkcja a jak wiemy możemy wywołać naszą funkcje od razu po jej zadeklarowaniu czyli sposobem na jej uruchomienie jest po prostu dodanie nawiasów po "()" w której znajduje się nasza funkcja
    
    (
        () => {
        const name = "funkcje testową 9"
        console.log('Uruchamiam ' + name)
        
        }
    )();
    // po dodaniu () wywołujących funkcjie znajdującą się wewnątrz "()" nasza funkcja uruchamia się poprawnie i w ten sposób dotarliśmy do zapisu taki jaki był na poczatku
    // zapis ten nie jest bardzo czytelny jednak dzieki niemu możemy wywołać funkcje 

    // istnieją 2 możliwości wywoływania funkcji IIFE pierwszą możliwością jest
    (() => {
        const name = "funkcje testową 10"
        console.log('Uruchamiam ' + name)
        
    })();
    // jest to poprawne i ten zapis wykorzystuje funkcję strzałkową
    // oraz
    (function() {
        const name = "funkcje testową 11"
        console.log('Uruchamiam ' + name)
        
    }());
    // ten zapis również jest poprawny ale nie wykorzystuje on funkcji strzałkowej
    // jedyną rużnicą jest miejsce () wywołujących funkcję jednak NALEŻY PAMIĘTAĆ ŻE W WYKORZYSTUJĄC FUNKCJĘ STRZAŁKOWĄ NAWIASY MUSZA BYĆ POZA "()" W KTÓRYCH ZAWIERA SIĘ WYKONYWANA FUNKCJA
    // A WY PRZYPADKU NIE WYKORZYSTYWANIA FUNKCJI STRZAŁKOWYEJ () WYWOLUJĄCE FUNKCJĘ MUSZĄ BYĆ WEWNĄTRZ LUB ZEWNĄTRZ "()" W KTÓRYCH ZNAJDUJE SIĘ WYWOŁYWANA FUNKCJA

    // takie są zasady działania javascriptu i nalezy o nich pamiętać

    (function() {
        const name = "funkcje testową 12"
        console.log('Uruchamiam ' + name)
        
    }());
    // w tym przypadku funkcja zostanie od razu uruchomiona a następnie zostanie zwrócony jej rezultat

    (function() {
        const name = "funkcje testową 13"
        console.log('Uruchamiam ' + name)
        
    })();
    // w tym przypadku funkcja znajdująca się wewnątrz najpierw zostanie zwrócona jako funkcja poprzez "()" w których sie znajduje a następnie wywołana przez () znajdujące się poza

    // częstszym przypadkiem który możemy spotkać jest umiejscowienie () wywołujących funkcje na zewnątrz "()" w których znajduje się funkcja ponieważ coraz częściej wykorzystywane są funkcje strzałkowe
    // a ona wymaga aby te nawiasy były poza "()" w których znajduje się funkcja
}

function operatoryJednowarunkowe(){
    console.log("operatory jednowarunkowe + - !")
     // ----------------------------------------------------------------- operatory jednowarunkowe + - !! -----------------------------------------------------------------------------------------

     2 + 3;
     // operator 2 argumentowy "+" ponieważ posiada jakąś zmienną po lewej i prawej stronie

     + 3;
     // operator jedno argumientowy poneiważ przy "+" jest tylko jedna zmienna

     // operatory jedno argumentowe mogą również pracować na wartościach które nie są liczbami
    + 'przykład';
    // czyli mogą tak naprawdę pracować na czym kolwiek

    // podobną sytuacjię otrzymamy gdy zamiast operatora "+" wykorzystamy operator "-"
    - 'przykład';
    // lub "!"
    ! "przykład";
    !! "przykład";

    // OPERATOR JEDNOARGUMENTOWY - jest to operator kótry przyjmuje wyłącznie jedną wartość i coś zwraca

    // ----------------------------------------------------------------- operator + -----------------------------------------------------------------------------------------
    // operator "+" stara się przekonwertować jakąś wartość która bedzie przez niego przyjmowana na liczbę
    // oznacza to że jeśli przyjmie liczbę to nic się nie zmieni
    // jednak jeśli będzie to string który reprezentuje pewną liczbę to postara zmienić sie go na liczbę (czyli zmienić typ zmiennej ze "STRING" na "NUMBER")

    const test = "4";
    console.log(typeof test);
    // nasz wynik: string
    console.log(typeof +test);
    // nasz wynik: number

    // pytanie gdzie takie coś może nam się przydać?
    // pierwszym przykładem może być funkcjia IIFE która została omówiona wyżej 

    // kolejnym przykładem może być:
    // Zadada działania strony:
    // mamy prostą strone która zawiera 2 inputy typu number oraz przycisk do dodawania (do sumowania dwóch wprowadzonych liczb)
    // zasada działania skryptu jest bardzo prosta
    // javascript znajduje button potem zostaje do niego dodany Listener w momencie kliknięcia w ten button wykonuje się funkcja "addNumbers" która z kolei:
    document.querySelector('button').addEventListener("click", addNumbers2)

    function addNumbers(){
        // pobiera oraz zapisuje wartości które zaostały przez nas wprowadzone do inputów
        const number1 = document.querySelector('#number1').value
        const number2 = document.querySelector('#number2').value

        // dodaje do siebie te wartości
        const result = number1 + number2
        // oraz wynik zostanie wyświetlony w konsoli
        console.log(result)
    }
    // jednak po próbie uruchomienia tego skryptu oraz przetestowania go w konsoli widzimy coś niespodziewanego ponieważ kiedy wprowadzimy do inputów warotści "2" oraz "5"
    // naszym wynikiem będzie "25" a nie to o co nam chodziło czyli liczba "7"
    // dzieje się tak dlatego ponieważ zawsze wartości pobierane z inputów pobierane są jako STRING nawet wtedy gdy input ma typ NUMBER
    // nawet jeśli wpiszemy do inputów liczbę to i tak zostaną one pobrane jako STRING
    // nasz wynik również zostanie zwrócony jako STRING czyli nastąpiło tutaj połączenie dwóch stringów

    function addNumbers1(){
        // moglibyśmy się przed tym zabespieczyć korzystając z konwersji tych zmiennych na typ NUMBER:
        const number1 = Number(document.querySelector('#number1').value)
        // kolejnym sposobem może być sparsowanie pobranej zmiennej do inta:
        const number2 = parseInt(document.querySelector('#number2').value)

        const result = number1 + number2
        console.log(result)
    }
    // po takim zabiegu oraz zabespieczeniu naszego kodu zacznie on działać jednak jesteśmy w stanie zrobić to w prostrzy sposób przy wykorzystaniu operatora jednoargumentowego "+"

    function addNumbers2(){
        const number1 = +document.querySelector('#number1').value
        const number2 = +document.querySelector('#number2').value

        const result = number1 + number2
        console.log(result)
    };
    // i to również zadziała ponieawż będzie starał się on skonwertować wartość którą przyjmuje na typ NUMBER

    // operator jednoargumentowy "+" nie musi przyjmować tylko liczb może przyjąć dosłownie wszystko (np "[]","string") generalnie może on być stosowany zawsze i zawsze będzie starał się postępować 
    // według paru kroków:

    // jeżeli mamy jakąś wartość np:
    const value = '...'             // <- jakaś nasza wartość
    // operator "+" postępuje według 3 kroków
    // 1. pierwszym krokiem jest pobranie wartoci ("valueOf()") naszej zmiennej
    value.valueOf()

    //-------------------------------------------------------------------------------------
    // "valueOf" to wbudowana funkcja we wszystkie obiekty
    // przykładowo
    console.log("4".valueOf())
    // nasz wynik: "4"
    
    // jeżeli będziemy mieli jakiś obiekt:
    {test: "value"}
    // które przechowywuje jakieś testowe pole i będziemy chcieli użyć na nim "valueOf()"
    console.log(({test: "value"}).valueOf())
    // to zwrócona zostanie wartość naszego obiektu
    // generalnie jest to metoda dostępna w każdym obiekcie w JavaScirpcie
    //-------------------------------------------------------------------------------------

    //2. stara się sparsować naszą wartość do STRING-a
    value.toString()
    // parsowanie do typu STRING odbywa się ponieważ jak widzimy na przykładzie obiektu zwrócony został pewien obiekt więc jeżeli będziemy mieć obiekt to w dalszym ciągu "+" będzie próbował
    // sparsować go do stringa
    console.log(({test: "value"}).valueOf().toString())
    // nasz wynik: "[object Object]""

    //3. na końcu stara się zrzutować naszą wartość do typu NUMBER
    Number(value)
    // czyli przekonwertować naszą wartość do liczby

    console.log(Number(({test: "value"}).valueOf().toString()))
    // nasz wynik: NaN
    // tutaj podobnie jak w części poświęconej KOERCI TYPÓW otrzymujemy wartość NaN ponieważ nie da się takiego stringa przekonwertować na liczbę

    // dlatego gdy użyjemy operatora jednoargumentowego "+" zwróci on NaN
    console.log(+{test: "value"})
    // nasz wynik: NaN

    // powyższe kroki możemy udowodnić nadpisując w naszym obiekcie "valueOf"
    console.log(+{valueOf: () => {return 9}})
    // nasz wynik: 9
    // co udowadnia że operator jednoargumentowy "+" przechodzi przez wszystkie te kroki kożystając miedzy innymi z "valueOf"

    // jednak bardzo ważne jest aby nie mylić operatora jednoargumentowego "+" (+ wartość) z operatorem dwu argumentowym "+" (wartość + wartość)
    // dlatego że gdy przy operatorze dwuargumentowym "+" będziemy starali się coś dodać jednak jeden z argumentów nie będzie liczbą:
    console.log('2' + 4)
    // nasz wynik: 24
    // w takim przypadku nastąpi połączenie STRING-ów
    // tak samo w drugą stronę:
    console.log(2 + "4")
    // nasz wynik: 24
    // czyli w takim przypadku robi się coś odwrotnego niż przy użyciu operatora jednoargumentowego "+" ponieważ w przypadku jednoargumentowego operatora "+" zawsze będzie on próbował zwrócić daną zmienną
    // już z przypisanym typem NUMBER i zawsze zostanie to zwrócone do typu NUMBER jeżeli nie jest to wykonalne to zwrócone zostanie NaN jednak tym nadal zawsze pozostanie NUMBER

    // jednak możemy również w powyższym przypadku użyć operatora jednoargumentowego
    console.log(2 + + "4")
    // nasz wynik: 6
    // zasada działania pozostaje nie zmienna

    // przykład zastosowania operatora jednoargumentowego przy użyciu TIMESTAMP (liczba milisekund od 1 stycznia 1970 dostępna chyba w każdym jezyku programowania dzięki której jesteśmy w stanie odmierzać czas) 
    // pobranie czasu UNIX-owego:
    //1.
    const data = (new Date()).valueOf()
    console.log(data)
    // nasz wynik: liczba milisekund od 1 stycznia 1970
    console.log(data/1000)
    // nasz wynik: liczba sekund od 1 stycznia 1970

    //2.
    const data1 = Date.now()
    console.log(data1)
    // nasz wynik: liczba milisekund od 1 stycznia 1970
    // działa to w ten sam sposób

    // jednak korzystając z tego że operatorjednoargumentowy korzysta z metory valueOf() możemy to wykorzystać i użyć sposobu:
    //3.
    const data2 = +new Date()
    console.log(data2)
    // nasz wynik: liczba milisekund od 1 stycznia 1970

    // zaleta sposobu 1 oraz 3 nad sbosobem nr 2 jest taka że przy tworzeniu new Date() w argumencie mozemy przypisać jakąś datę np starą date
    const data3 = +new Date('12/1/2021')
    console.log(data3)
    // nasz wynik: liczba milisekund od 1 stycznia 1970 do 12 stycznia 2021

    // innym przykładem może być:
    const value1 = ['2']
    // chcemy na końcu dostać 2 ale jako typ NUMBER nie jako STRING
    // możemy tego dokonać poprzez rzutowanie na typ NUMBER
    console.log(Number(value1[0]))
    console.log(typeof Number(value1[0]))
    // nasz wynik: 2
    // nasz wynik: number

    // możemy jednak zrobić następującą rzecz:
    // sprawdzźmy co zwróci nam "valueOf()" naszej tablicy
    console.log(value1.valueOf())
    // nasz wynik: ['2']
    // naszym wynikiem będzie po prostu nasza tablica nie jest to zbyt pomocne

    // kolejnym krokiem będzie zastosowanie "toString()"
    console.log(value1.valueOf().toString())
    // nasz wynik: '2' [STRING]
    // metoda ta stara się zmienić naszą wartość do stringa i otrzymujemy tutaj 2 jako string

    // ostatnim etapem może być konwersja na typ NUMBER dzięki czemu otrzymamy to czego oczekiwaliśmy
    console.log(Number(value1.valueOf().toString()))
    // nasz wynik: 2 [NUMBER]

    // jednak możemy to samo osiągnąć poprzez zapis
    console.log(+value1)
    // nasz wynik: 2 [NUMBER]

    // JEDNAK NALEZY ZAPAMIĘTAĆ ŻE GDY TABLICA POSIADA WIĘCEJ NIŻ 1 ELEMENT NIE OTRZYMAMY JUŻ TAKIEGO WYNIKU PONIEWAŻ ZOSTANIE ZWRUCONE NaN
    const value2 = ['2', '3']
    console.log(+value2)
    // nasz wynik: NaN
    // dzieje się tak dlatego że gdybyśmy chcieli wykonać krok nr2:
    console.log(value2.valueOf().toString())
    // nasz wynik: "2,3"
    // wiec naszego wyniku nie damy radę przekonwertować na typ NUMBER

    // ----------------------------------------------------------------- operator - -----------------------------------------------------------------------------------------
    // robi on praktycznie to samo co jednoargumentowy operator "+"
    // załużmy że wykonuje on wszystkie te same kroki które występują w przypadku użycia "+" jednak na końcu tych kroków dostawia na początku - co zmienia wartość na przeciwną
    console.log(-"-4")
    // nasz wynik: 4

    // ----------------------------------------------------------------- operator ! -----------------------------------------------------------------------------------------
    // operator jednoargumentowy ! odwraca wartość dla przykładu FALSE zmienia na TRUE lub (TRUE ->)
    console.log(!false)
    // nasz wynik: true

    // w przypadku zastosowania tego operatora np ze STRINGIEM:
    console.log(!"test")
    // nasz wynik: false
    // widzimy że jest to odwrotny wynik niż tego czego się spodziewaliśmuy ponieważ:
    console.log(Boolean("test"))
    // nasz wynik: true
    // w takim przypadku należy zastosować operator jednoargumentowy !!


    // ----------------------------------------------------------------- operator !! -----------------------------------------------------------------------------------------
    // po co nam w ogóle operatorjednoargumentowy "!!" wynikiem takiego operatora w przypadku postawienia go przy FALSE będzie również FALSE
    console.log(!!false)
    // nasz wynik: false

    // jego zastosowanie przedewszystkim daje o sobie znać gdy zmienną którą próbujemy przekonwertować nie jest wartością BOOLEAN
    // ponieważ zastosowanie go w przypadku tekstu da nam wynik poprawny
    console.log(!!"test")


}