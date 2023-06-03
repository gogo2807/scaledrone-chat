# O aplikaciji
Soba za pričanje je web-chat aplikacija bazirana na html-u, css-u, javascriptu, reactjs i scaledronu.Jednostavnog dizajna i načina rada. Aplikacija radi osnovne stvari - šalje i prima poruke. Korisnici aplikacije dobivaju nasumično generirana imena i ta imena su različitih boja zbog lakšeg razlikovanja, boje su također nasumično generirane. Poruke koje korisnik šalje se prikazuju u desnom dijelu aplikacije, a dolazne poruke se prikazuju u lijevom dijelu aplikacije.

## Projektni zahtjevi
Projektni zahtjevi glede reacta se mogu pogledati u package.json datoteci. Od ostalih zahtjeva tu su:
- html5
- css3
- javascript ES6
Nakon što se kreira projektna struktura direktorija sa:
- npx create-react-app scaledrone-chat
potrebno je instalirati:
- npm install react react-dom

## Environment varijable
Environment varijable su spremljene u zasebnoj datoteci -.env koja se nalazi u rootu projektnog direktorija

## Struktura projekta
Unutar src direktorija se nalaze 3 poddirektorija:
- components
- styles
- utils
Svaki od ovih direktorija sadrži datoteke vezane za ispravan rad aplikacije.

### Components
Direktorij components sarži javascripte koji su vezane za određene radnje u aplikaciji. Skripte su slijedeće:
- MemberCount.js - prikazuje ukupan broj korisnika aplikacije
- MemberList.js - prikazuje listu korisnika aplikacije
- MessageForm.js - zadužena za akcije oko slanja poruke
- Messages.js - prikazuje poruke korisnika

### Styles
Direktorij styles sadrži css datoteke zadužene za dizajn same aplikacije:
- ChatHeader.css
- media.css - sadrži stilove za desktop, tablet i mobilne uređaje, a zatim se ti stilovi uvoze u sve ostale css datoteke
- MemberCount.css
- MemberList.css
- MessageForm.css
- Messages.css 
- index.js - centralna css datoteka gdje su uvedeni svi css stilovi, kako se ne bi morali svi stilovi pojedinačno uvoziti u App.js datoteku.

### Utils
Ovaj direktorij sadrži samo jednu datoteku utils.js. Utils.js je zadužen za generiranje nasumičnih imena korisnika i boja tih imena.

## Pokretanje aplikacije
U rootu projektnog direktorija aplikacije se pokreće sa:
- npm start

Aplikacija je dostupna na URL-u: 
- lokalno: http://localhost:3000/
- putem mreže: http://ip:3000 

## Stvaranje aplikacije
Za stvaranje aplikacije potrebno je pokrenuti naredbu:
- npm run build
Naredba se može pokretati više puta. Prilikom novog pokretanja naredbe, postojeći build direktorij se pregazi sa novim podacima. 

