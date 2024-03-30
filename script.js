const movies = [
    { engname: "The Exorcist", ptname: "O Exorcista", sinopse: "Uma atriz vai gradativamente tomando consciência de que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também é um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.", poster: "https://a.ltrbxd.com/resized/film-poster/4/7/0/4/8/47048-the-exorcist-0-500-0-750-crop.jpg", year: "1973", },
    { engname: "The Pope’s Exorcist", ptname: "O Exorcista do Papa", sinopse: "O padre Gabriele Amorth, exorcista do Vaticano, luta contra Satanás e demônios possuidores de inocentes. Um retrato detalhado de um padre que realizou mais de 100 mil exorcismos em sua vida.", poster: "https://a.ltrbxd.com/resized/film-poster/6/7/8/8/4/5/678845-the-pope-s-exorcist-0-1000-0-1500-crop.jpg", year: "2023", },
    { engname: "Skinamarink", ptname: "Skinamarink: Canção de Ninar", sinopse: "Após um acidente bizarro, uma menina de seis anos e seu irmão de quatro anos acordam uma manhã e descobrem que todas as portas e janelas dentro de sua casa desapareceram. Todos os telefones estão mudos e o cabo também. O pai deles também está desaparecido. Para lidar com a situação estranha, os dois trazem travesseiros e cobertores para a sala e se acomodam em uma festa do pijama tranquila. Eles reproduzem antigas fitas de vídeo de desenhos animados para preencher o silêncio da casa e distrair da situação assustadora e inexplicável. O tempo todo na esperança de que eventualmente alguns adultos venham resgatá-los. Depois de uma noite dormindo na casa lacrada, coisas estranhas começam a acontecer. As coisas desaparecem. Sons estranhos emanam do andar de cima. As luzes se apagam sozinhas. Depois de um tempo, fica claro que algo está cuidando deles.", poster: "https://a.ltrbxd.com/resized/film-poster/8/9/5/1/3/0/895130-skinamarink-0-1000-0-1500-crop.jpg", year: "2022", },
    { engname: "Talk to Me", ptname: "Fale Comigo", sinopse: "Um grupo de amigos descobre uma mão embalsamada que lhes permite conjurar espíritos. Viciado na emoção, um deles vai longe demais e abre a porta para o mundo espiritual.", poster: "https://a.ltrbxd.com/resized/film-poster/9/0/8/1/4/4/908144-talk-to-me-0-1000-0-1500-crop.jpg", year: "2022", },
    { engname: "The Dark and the Wicked", ptname: "Demoníaca", sinopse: "Em uma fazenda isolada de uma cidade rural, dois filhos chegam para se despedir do pai que está morrendo. Rapidamente, uma escuridão parece atingir a família, marcada por pesadelos e uma crescente sensação de que algo maligno se aproxima.", poster: "https://a.ltrbxd.com/resized/film-poster/6/0/4/9/6/7/604967-the-dark-and-the-wicked-0-1000-0-1500-crop.jpg", year: "2020", },
    { engname: "Pearl", ptname: "Pearl", sinopse: "Presa em uma fazenda isolada, Pearl deve cuidar de seu pai doente sob a vigilância de sua mãe. Desejando a vida glamouroso que ela viu nos filmes, as tentações e repressões de Pearl colidem.", poster: "https://a.ltrbxd.com/resized/film-poster/8/5/3/8/2/2/853822-pearl-0-1000-0-1500-crop.jpg", year: "2022", },
    { engname: "Soylent Green", ptname: "No Mundo de 2020", sinopse: "Em 2022, Robert Thorn investiga o assassinato de um executivo cuja companhia produz uma comida sintética nutritiva. Mas, no processo de rastrear o assassino, Thorn desvenda várias informações chocantes sobre os ingredientes do produto.", poster: "https://a.ltrbxd.com/resized/sm/upload/nf/q5/cw/i9/eXZcuTPyhV0yhHL9ox6Ygw8Gd8I-0-1000-0-1500-crop.jpg", year: "1973", },
    { engname: "Pet Sematary", ptname: "O Cemitério Maldito", sinopse: "O jovem médico Louis Creed se muda com sua família para o interior do Maine. Lá, eles fazem amizade com o simpático vizinho, Jud Crandall. O gato dos Creed morre em um acidente e Crandall aconselha Louis a enterrá-lo em um local misterioso perto do antigo cemitério de animais de estimação. O gato volta à vida, mas seu comportamento mudou para pior. Quando o filho caçula de Louis morre tragicamente, ele decide enterrar o corpo do menino no mesmo terreno, apesar dos avisos de Crandall.", poster: "https://a.ltrbxd.com/resized/film-poster/4/7/5/1/4/47514-pet-sematary-0-1000-0-1500-crop.jpg", year: "1989", },
    { engname: "Children of the Corn", ptname: "Colheita Maldita", sinopse: "A viagem de um médico com sua mulher é interrompida quando o casal encontra o corpo de um garoto na estrada. Eles tentam chamar a polícia e acabam em um vilarejo onde jovens adoradores de um culto macabro realizam sacrifícios humanos.", poster: "https://a.ltrbxd.com/resized/sm/upload/mj/ns/kg/kd/miJTMLdgrrgAs7blRjLutfLha9M-0-1000-0-1500-crop.jpg", year: "1984", }
    // Add more movie objects as needed
];

const generateButton = document.getElementById("generateButton");
const movieEngNameElement = document.getElementById("movieEngName");
const moviePosterElement = document.getElementById("moviePoster");
const movieYearElement = document.getElementById("movieYear");
const moviePtNameElement = document.getElementById("moviePtName");
const movieSinopseElement = document.getElementById("movieSinopse");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    movieEngNameElement.textContent = randomMovie.engname;
    moviePosterElement.src = randomMovie.poster;
    movieYearElement.textContent = randomMovie.year;
    moviePtNameElement.textContent = randomMovie.ptname;
    movieSinopseElement.textContent = randomMovie.sinopse;
});
