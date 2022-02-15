//nav

window.addEventListener('scroll', function () {

    const logoimg = document.querySelector('.logo img');
    const mainnav = document.getElementById("mainnav");
    if (window.pageYOffset > 0) {
        logoimg.style.height = "64px";
        mainnav.classList.add('bg-black');
        mainnav.classList.add('tstwhite');
    } else {
        logoimg.style.height = "84px";
        mainnav.classList.remove('bg-black');
        mainnav.classList.remove('tstwhite');
    }


});

//end nav
//typing
class TypeWriter {
    constructor(txtElement, words, wait = 500) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 7);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];
        if (this.isDeleting) {
            this.txt = fulltxt.substring(0, this.txt.length - 1);


        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 50;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);
function init() {
    const txtElement = document.querySelector('.txttype');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);


}
//end typing
//start section 1
document.querySelector("#b1").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b1").style.width = "90px";
        document.querySelector("#img1").style.width = "90px";
        document.querySelector("#b1").style.height = "90px";
        document.querySelector("#img1").style.height = "90px";
        document.querySelector("#img1").style.borderRadius = "50%";
        document.querySelector("#b1").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b1");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            document.querySelector("#b1").style.marginLeft = "100px";
            if (window.innerWidth < 376) {
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {
                    for (; pos >= 60; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.right = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + 200 + "px";

                }
            }


        }
        setTimeout(function () {
            document.querySelector("#b1").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li1").classList.add('active');
            document.querySelector("#c1").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b1").style.display = "block";

                if (window.innerWidth < 376) {
                    document.querySelector("#b1").style.width = "250px";
                    document.querySelector("#img1").style.width = "250px";
                    document.querySelector("#b1").style.marginLeft = "10px";
                    document.querySelector("#b1").style.marginTop = "-10px";
                    document.querySelector("#b1").style.height = "250px";
                    document.querySelector("#img1").style.height = "250px";
                    document.querySelector("#img1").style.borderRadius = "";
                    document.querySelector("#b1").style.borderRadius = "";
                    document.querySelector("#li1").classList.remove('active');
                    document.querySelector("#c1").classList.remove('active');
                    elem.classList.remove('ok');



                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b1").style.width = "300px";
                    document.querySelector("#img1").style.width = "300px";
                    document.querySelector("#b1").style.marginLeft = "-400px";
                    document.querySelector("#b1").style.marginTop = "-30px";
                    document.querySelector("#b1").style.height = "300px";
                    document.querySelector("#img1").style.height = "300px";
                    document.querySelector("#img1").style.borderRadius = "";
                    document.querySelector("#b1").style.borderRadius = "";
                    document.querySelector("#li1").classList.remove('active');
                    document.querySelector("#c1").classList.remove('active');
                    elem.classList.remove('ok');



                } else {
                    document.querySelector("#b1").style.width = "350px";
                    document.querySelector("#img1").style.width = "350px";
                    document.querySelector("#b1").style.marginLeft = "-355px";
                    document.querySelector("#b1").style.marginTop = "-30px";
                    document.querySelector("#b1").style.height = "300px";
                    document.querySelector("#img1").style.height = "300px";

                    document.querySelector("#img1").style.borderRadius = "";
                    document.querySelector("#b1").style.borderRadius = "";
                    document.querySelector("#li1").classList.remove('active');
                    document.querySelector("#c1").classList.remove('active');
                    elem.classList.remove('ok');

                }

            }
        }, 2000);
        return false;
    }
document.querySelector("#b2").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b2").style.width = "90px";
        document.querySelector("#img2").style.width = "90px";
        document.querySelector("#b2").style.height = "90px";
        document.querySelector("#img2").style.height = "90px";
        document.querySelector("#img2").style.borderRadius = "50%";
        document.querySelector("#b2").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b2");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b2").style.marginLeft = "480px";
            document.querySelector("#b2").style.marginTop = "30px";
            if (window.innerWidth < 376) {
                document.querySelector("#b2").style.marginLeft = "30px";
                document.querySelector("#b2").style.marginTop = "350px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 60; pos--) {

                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok1');

                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b2").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li2").classList.add('active');
            document.querySelector("#c2").classList.add('active');

            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b2").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b2").style.width = "250px";
                    document.querySelector("#img2").style.width = "250px";
                    document.querySelector("#b2").style.marginLeft = "-50px";
                    document.querySelector("#b2").style.marginTop = "330px";
                    document.querySelector("#b2").style.height = "250px";
                    document.querySelector("#img2").style.height = "250px";

                    document.querySelector("#img2").style.borderRadius = "";
                    document.querySelector("#b2").style.borderRadius = "";
                    document.querySelector("#li2").classList.remove('active');
                    document.querySelector("#c2").classList.remove('active');
                    elem.classList.remove('ok1');


                }

                else if (window.innerWidth < 1025) {
                    document.querySelector("#b2").style.width = "300px";
                    document.querySelector("#img2").style.width = "300px";
                    document.querySelector("#b2").style.marginLeft = "440px";
                    document.querySelector("#b2").style.marginTop = "-30px";
                    document.querySelector("#b2").style.height = "300px";
                    document.querySelector("#img2").style.height = "300px";
                    document.querySelector("#img2").style.borderRadius = "";
                    document.querySelector("#b2").style.borderRadius = "";
                    document.querySelector("#li2").classList.remove('active');
                    document.querySelector("#c2").classList.remove('active');
                    elem.classList.remove('ok1');



                } else {
                    document.querySelector("#b2").style.width = "350px";
                    document.querySelector("#img2").style.width = "350px";
                    document.querySelector("#b2").style.marginLeft = "420px";
                    document.querySelector("#b2").style.marginTop = "-30px";
                    document.querySelector("#b2").style.height = "300px";
                    document.querySelector("#img2").style.height = "300px";
                    document.querySelector("#img2").style.borderRadius = "";
                    document.querySelector("#b2").style.borderRadius = "";
                    document.querySelector("#li2").classList.remove('active');
                    document.querySelector("#c2").classList.remove('active');
                    elem.classList.remove('ok1');

                }

            }





        }, 2000);



        return false;
    }
document.querySelector("#b3").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b3").style.width = "90px";
        document.querySelector("#img3").style.width = "90px";
        document.querySelector("#b3").style.height = "90px";
        document.querySelector("#img3").style.height = "90px";
        document.querySelector("#img3").style.borderRadius = "50%";
        document.querySelector("#b3").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b3");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
            document.querySelector("#b3").style.marginLeft = "";
            document.querySelector("#b3").style.marginTop = "";
            if (window.innerWidth < 376) {

                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');
                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            }
            else if (window.innerWidth < 1025) {
                if (pos == 250) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.right = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');
                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            }


            else {
                if (pos == 250) {

                    for (; pos >= 10; pos--) {

                        elem.style.top = -pos + "px";
                        elem.style.left = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok2');


                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = -pos + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b3").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "300px" }
            else if (window.innerWidth < 1025) { document.querySelector(".csss").style.paddingTop = "350px" }
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li3").classList.add('active');
            document.querySelector("#c3").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b3").style.display = "block";


                if (window.innerWidth < 376) {
                    document.querySelector("#b3").style.marginLeft = "-50px";
                    document.querySelector("#b3").style.marginTop = "620px";
                    document.querySelector("#b3").style.width = "250px";
                    document.querySelector("#img3").style.width = "250px";
                    document.querySelector("#b3").style.height = "250px";
                    document.querySelector("#img3").style.height = "250px";
                    document.querySelector("#img3").style.borderRadius = "";
                    document.querySelector("#b3").style.borderRadius = "";
                    document.querySelector("#li3").classList.remove('active');
                    document.querySelector("#c3").classList.remove('active');
                    elem.classList.remove('ok2');

                }
                else if (window.innerWidth < 1025) {

                    document.querySelector("#b3").style.marginLeft = "-250px";
                    document.querySelector("#b3").style.marginTop = "660px";

                    document.querySelector("#b3").style.width = "300px";
                    document.querySelector("#img3").style.width = "300px";
                    document.querySelector("#b3").style.height = "300px";
                    document.querySelector("#img3").style.height = "300px";
                    document.querySelector("#img3").style.borderRadius = "";
                    document.querySelector("#b3").style.borderRadius = "";
                    document.querySelector("#li3").classList.remove('active');
                    document.querySelector("#c3").classList.remove('active');
                    elem.classList.remove('ok2');

                }


                else {
                    document.querySelector("#b3").style.marginLeft = "850px";
                    document.querySelector("#b3").style.marginTop = "40px";
                    document.querySelector("#b3").style.width = "350px";
                    document.querySelector("#img3").style.width = "350px";
                    document.querySelector("#b3").style.height = "300px";
                    document.querySelector("#img3").style.height = "300px";
                    document.querySelector("#img3").style.borderRadius = "";
                    document.querySelector("#b3").style.borderRadius = "";
                    document.querySelector("#li3").classList.remove('active');
                    document.querySelector("#c3").classList.remove('active');
                    elem.classList.remove('ok2');

                }

            }

        }, 2000);







        return false;
    }
document.querySelector("#b4").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b4").style.width = "90px";
        document.querySelector("#img4").style.width = "90px";
        document.querySelector("#b4").style.height = "90px";
        document.querySelector("#img4").style.height = "90px";
        document.querySelector("#img4").style.borderRadius = "50%";
        document.querySelector("#b4").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b4");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b4").style.marginLeft = "100px";
            document.querySelector("#b4").style.marginTop = "360px";
            if (window.innerWidth < 376) {
                document.querySelector("#b4").style.marginLeft = "30px";
                document.querySelector("#b4").style.marginTop = "1000px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 10; pos--) {

                        elem.style.top = pos + "px";
                        elem.style.right = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok3');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b4").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "650px" }
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li4").classList.add('active');
            document.querySelector("#c4").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b4").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b4").style.width = "250px";
                    document.querySelector("#img4").style.width = "250px";
                    document.querySelector("#b4").style.marginLeft = "-45px";
                    document.querySelector("#b4").style.marginTop = "1000px";
                    document.querySelector("#b4").style.height = "250px";
                    document.querySelector("#img4").style.height = "250px";
                    document.querySelector("#img4").style.borderRadius = "";
                    document.querySelector("#b4").style.borderRadius = "";
                    document.querySelector("#li4").classList.remove('active');
                    document.querySelector("#c4").classList.remove('active');
                    elem.classList.remove('ok3');


                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b4").style.width = "300px";
                    document.querySelector("#img4").style.width = "300px";
                    document.querySelector("#b4").style.marginLeft = "-400px";
                    document.querySelector("#b4").style.marginTop = "350px";
                    document.querySelector("#b4").style.height = "300px";
                    document.querySelector("#img4").style.height = "300px";
                    document.querySelector("#img4").style.borderRadius = "";
                    document.querySelector("#b4").style.borderRadius = "";
                    document.querySelector("#li4").classList.remove('active');
                    document.querySelector("#c4").classList.remove('active');
                    elem.classList.remove('ok3');


                } else {
                    document.querySelector("#b4").style.width = "350px";
                    document.querySelector("#img4").style.width = "350px";
                    document.querySelector("#b4").style.marginLeft = "-350px";
                    document.querySelector("#b4").style.marginTop = "350px";
                    document.querySelector("#b4").style.height = "300px";
                    document.querySelector("#img4").style.height = "300px";
                    document.querySelector("#img4").style.borderRadius = "";
                    document.querySelector("#b4").style.borderRadius = "";
                    document.querySelector("#li4").classList.remove('active');
                    document.querySelector("#c4").classList.remove('active');
                    elem.classList.remove('ok3');
                }
            }
        }, 2000);
        return false;
    }
document.querySelector("#b5").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b5").style.width = "90px";
        document.querySelector("#img5").style.width = "90px";
        document.querySelector("#b5").style.height = "90px";
        document.querySelector("#img5").style.height = "90px";
        document.querySelector("#img5").style.borderRadius = "50%";
        document.querySelector("#b5").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b5");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b5").style.marginLeft = "480px";
            document.querySelector("#b5").style.marginTop = "360px";
            if (window.innerWidth < 376) {
                document.querySelector("#b5").style.marginLeft = "30px";
                document.querySelector("#b5").style.marginTop = "1350px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 60; pos--) {

                        elem.style.top = -pos + "px";
                        elem.style.right = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = -pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b5").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "1050px" }
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li5").classList.add('active');
            document.querySelector("#c5").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b5").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b5").style.width = "250px";
                    document.querySelector("#img5").style.width = "250px";
                    document.querySelector("#b5").style.marginLeft = "0px";
                    document.querySelector("#b5").style.marginTop = "1300px";
                    document.querySelector("#b5").style.height = "250px";
                    document.querySelector("#img5").style.height = "250px";

                    document.querySelector("#img5").style.borderRadius = "";
                    document.querySelector("#b5").style.borderRadius = "";
                    document.querySelector("#li5").classList.remove('active');
                    document.querySelector("#c5").classList.remove('active');
                    elem.classList.remove('ok');

                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b5").style.width = "300px";
                    document.querySelector("#img5").style.width = "300px";
                    document.querySelector("#b5").style.marginLeft = "550px";
                    document.querySelector("#b5").style.marginTop = "420px";
                    document.querySelector("#b5").style.height = "300px";
                    document.querySelector("#img5").style.height = "300px";

                    document.querySelector("#img5").style.borderRadius = "";
                    document.querySelector("#b5").style.borderRadius = "";
                    document.querySelector("#li5").classList.remove('active');
                    document.querySelector("#c5").classList.remove('active');
                    elem.classList.remove('ok');

                } else {
                    document.querySelector("#b5").style.width = "350px";
                    document.querySelector("#img5").style.width = "350px";
                    document.querySelector("#b5").style.marginLeft = "530px";
                    document.querySelector("#b5").style.marginTop = "420px";
                    document.querySelector("#b5").style.height = "300px";
                    document.querySelector("#img5").style.height = "300px";

                    document.querySelector("#img5").style.borderRadius = "";
                    document.querySelector("#b5").style.borderRadius = "";
                    document.querySelector("#li5").classList.remove('active');
                    document.querySelector("#c5").classList.remove('active');
                    elem.classList.remove('ok');
                }

            }

        }, 2000);
        return false;
    }

document.querySelector("#b6").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.width = "90px";
        document.querySelector("#img6").style.width = "90px";
        document.querySelector("#b6").style.height = "90px";
        document.querySelector("#img6").style.height = "90px";
        document.querySelector("#img6").style.borderRadius = "50%";
        document.querySelector("#b6").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b6");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b6").style.marginLeft = "";
            document.querySelector("#b6").style.marginTop = "";
            if (window.innerWidth < 376) {
                document.querySelector("#b6").style.marginLeft = "30px";
                document.querySelector("#b6").style.marginTop = "1680px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 50; pos--) {
                        elem.style.top = -pos + "px";
                        elem.style.left = -pos + "px";

                    }

                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = -pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b6").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "1350px" }
            else if (window.innerWidth < 1025) { document.querySelector(".csss").style.paddingTop = "350px" }

            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#li6").classList.add('active');
            document.querySelector("#c6").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b6").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b6").style.marginLeft = "0px";
                    document.querySelector("#b6").style.marginTop = "1680px";
                    document.querySelector("#b6").style.width = "250px";
                    document.querySelector("#img6").style.width = "250px";
                    document.querySelector("#b6").style.height = "250px";
                    document.querySelector("#img6").style.height = "250px";
                    document.querySelector("#img6").style.borderRadius = "";
                    document.querySelector("#b6").style.borderRadius = "";
                    document.querySelector("#li6").classList.remove('active');
                    document.querySelector("#c6").classList.remove('active');
                    elem.classList.remove('ok');

                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b6").style.marginLeft = "550px";
                    document.querySelector("#b6").style.marginTop = "750px";
                    document.querySelector("#b6").style.width = "300px";
                    document.querySelector("#img6").style.width = "300px";
                    document.querySelector("#b6").style.height = "300px";
                    document.querySelector("#img6").style.height = "300px";
                    document.querySelector("#img6").style.borderRadius = "";
                    document.querySelector("#b6").style.borderRadius = "";
                    document.querySelector("#li6").classList.remove('active');
                    document.querySelector("#c6").classList.remove('active');
                    elem.classList.remove('ok');

                } else {
                    document.querySelector("#b6").style.marginLeft = "910px";
                    document.querySelector("#b6").style.marginTop = "410px";
                    document.querySelector("#b6").style.width = "350px";
                    document.querySelector("#img6").style.width = "350px";
                    document.querySelector("#b6").style.height = "300px";
                    document.querySelector("#img6").style.height = "300px";

                    document.querySelector("#img6").style.borderRadius = "";
                    document.querySelector("#b6").style.borderRadius = "";
                    document.querySelector("#li6").classList.remove('active');
                    document.querySelector("#c6").classList.remove('active');
                    elem.classList.remove('ok');
                }

            }

        }, 2000);
        return false;
    }
    //end section 1
    //start section 2
window.addEventListener('scroll', function () {

    if (window.pageYOffset > 1000 && window.pageYOffset < 1050) {
        var id = null;
        var elem = document.querySelector(".slider");
        var pos = -1200;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos == 0) {
                clearInterval(id);
            } else {
                pos += 5;
                elem.style.left = pos + "px";
            }
        }
        document.querySelector(".img1").style.height = "0px";

        document.querySelector(".headline").style.display = "none";

        setTimeout(function () {


            document.querySelector(".img1").style.height = "100%";
            document.querySelector(".headline").style.display = "block";

        }, 1000);
    }




});

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
//end section 2
//start section 3
about.addEventListener("click", function (e) {

    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {

            btn.classList.remove("active");

        });
        e.target.classList.add("active");

        articles.forEach(function (article) {
            article.classList.remove("active");

        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
//end section 3
//start section 4
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#name").onkeyup = function () {
        var x = document.getElementById("name").value;
        const y = x.length;
        if (y < 4 || y > 15) {
            document.getElementById("pname").innerHTML = "enter name between 4 to 15 letter ";
            document.getElementById("pname").style.fontSize = "15px";
            document.getElementById("pname").style.color = "red";
        }
        else {
            document.getElementById("pname").innerHTML = "correct ";
            document.getElementById("pname").style.fontSize = "15px";
            document.getElementById("pname").style.color = "green";
        }



    }
    document.querySelector("#sname").onkeyup = function () {
        var x1 = document.getElementById("sname").value;
        const y1 = x1.length;
        if (y1 < 4 || y1 > 15) {
            document.getElementById("psname").innerHTML = "enter name between 4 to 15 letter ";
            document.getElementById("psname").style.fontSize = "15px";
            document.getElementById("psname").style.color = "red";
        }
        else {
            document.getElementById("psname").innerHTML = "correct ";
            document.getElementById("psname").style.fontSize = "15px";
            document.getElementById("psname").style.color = "green";
        }



    }
    document.querySelector("#email").onkeyup = function () {
        var x2 = document.querySelector("#email").value;
        n = "@";
        if (x2.match(n)) {
            document.getElementById("pemail").innerHTML = "correct email";
            document.getElementById("pemail").style.fontSize = "15px";
            document.getElementById("pemail").style.color = "green";


        }
        else {
            document.getElementById("pemail").innerHTML = "enter your email";
            document.getElementById("pemail").style.fontSize = "15px";
            document.getElementById("pemail").style.color = "red";

        }


    }
    document.querySelector("#age").onkeyup = function () {
        var x3 = document.querySelector("#age").value;

        if (x3 > 100) {
            document.getElementById("page").innerHTML = "enter your correct age";
            document.getElementById("page").style.fontSize = "15px";
            document.getElementById("page").style.color = "red";


        }
        else if (x3 < 18) {
            document.getElementById("page").innerHTML = "you shouldn't be here you must be over 18 ";
            document.getElementById("page").style.fontSize = "15px";
            document.getElementById("page").style.color = "red";
        }
        else {
            document.getElementById("page").innerHTML = "correct age";
            document.getElementById("page").style.fontSize = "15px";
            document.getElementById("page").style.color = "green";


        }

    }
    document.querySelector("#country").onkeyup = function () {
        var x4 = document.getElementById("country").value;
        const y4 = x4.length;
        if (y4 < 4 || y4 > 15) {
            document.getElementById("pcountry").innerHTML = "enter correct country";
            document.getElementById("pcountry").style.fontSize = "15px";
            document.getElementById("pcountry").style.color = "red";
        }
        else {
            document.getElementById("pcountry").innerHTML = "correct";
            document.getElementById("pcountry").style.fontSize = "15px";
            document.getElementById("pcountry").style.color = "green";
        }



    }

    document.querySelector("#phone").onkeyup = function () {
        var x5 = document.querySelector("#phone").value;
        const y5 = x5.length;
        if (y5 == 11) {

            document.getElementById("pphone").innerHTML = "correct number";
            document.getElementById("pphone").style.fontSize = "15px";
            document.getElementById("pphone").style.color = "green";


        }
        else {
            document.getElementById("pphone").innerHTML = " correct number must consist of 11 numbers ";
            document.getElementById("pphone").style.fontSize = "15px";
            document.getElementById("pphone").style.color = "red";

        }

    }

    const choosefile = document.getElementById("choose-file");
    const imgpreview = document.getElementById("img-preview");

    choosefile.addEventListener("change", function () {

        getImgData();

    })
    function getImgData() {
        const files = choosefile.files[0];
        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function () {
                imgpreview.style.display = "block";
                imgpreview.innerHTML = '<img src="' + this.result + '"/>';

            });
        }

    }

    document.querySelector("#name").onchange = function () {

        var x = document.getElementById("name").value;

        var li = document.createElement("li");
        li.innerHTML = "first name: " + x;
        var b = document.createElement("button");
        b.innerHTML = "X";
        var ul = document.querySelector(".text")
        ul.appendChild(li);
        ul.appendChild(b);
        b.onclick = function () {
            document.getElementById("name").value = '';
            li.remove();
            b.remove();
            document.getElementById("pname").remove();


        }

    }
    document.querySelector("#sname").onchange = function () {
        var x1 = document.getElementById("sname").value;
        var li = document.createElement("li");
        li.innerHTML = "second name: " + x1;
        var ul = document.querySelector(".text")
        ul.appendChild(li);
        var b = document.createElement("button");
        b.innerHTML = "X";
        ul.appendChild(b);
        b.onclick = function () {
            document.getElementById("sname").value = '';
            li.remove();
            b.remove();
            document.getElementById("psname").remove();
        }

    }
    document.querySelector("#email").onchange = function () {
        var x2 = document.querySelector("#email").value;
        var li = document.createElement("li");
        li.innerHTML = "email: " + x2;
        var ul = document.querySelector(".text")
        ul.appendChild(li);
        var b = document.createElement("button");
        b.innerHTML = "X";
        ul.appendChild(b);
        b.onclick = function () {
            document.getElementById("email").value = '';
            li.remove();
            b.remove();
            document.getElementById("pemail").remove();
        }

    }
    document.querySelector("#age").onchange = function () {
        var x3 = document.querySelector("#age").value;

        var li = document.createElement("li");
        li.innerHTML = "age: " + x3;
        var ul = document.querySelector(".text")
        ul.appendChild(li);
        var b = document.createElement("button");
        b.innerHTML = "X";
        ul.appendChild(b);
        b.onclick = function () {
            document.getElementById("age").value = '';
            li.remove();
            b.remove();
            document.getElementById("page").remove();
        }

    }
    document.querySelector("#country").onchange = function () {
        var x4 = document.getElementById("country").value;
        var li = document.createElement("li");
        li.innerHTML = "country: " + x4;
        var ul = document.querySelector(".text")
        ul.appendChild(li);
        var b = document.createElement("button");
        b.innerHTML = "X";
        ul.appendChild(b);
        b.onclick = function () {
            document.getElementById("country").value = '';
            li.remove();
            b.remove();
            document.getElementById("pcountry").remove();
        }

    }
    document.querySelector("#phone").onchange = function () {
        var x5 = document.querySelector("#phone").value;
        var li = document.createElement("li");
        li.innerHTML = "phone number: " + x5;
        var ul = document.querySelector(".text")
        ul.appendChild(li);
        var b = document.createElement("button");
        b.innerHTML = "X";
        ul.appendChild(b);
        b.onclick = function () {
            document.getElementById("phone").value = '';
            li.remove();
            b.remove();
            document.getElementById("pphone").remove();
        }

    }

    function myTime() {
        var D = new Date();
        var h = D.getHours();
        var m = D.getMinutes();
        var s = D.getSeconds();

        var p = "AM";
        if (h > 11) {
            p = "PM";
            h - 12;
        }
        if (h < 10) { h = "0" + h; }
        if (m < 10) { m = "0" + m; }
        if (s < 10) { s = "0" + s; }

        document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " " + p;

        t = setTimeout('myTime()', 1000);
    }
    myTime();

});
//end section 4
//start section 5 counter
const months = ["january", "february", "march", "april", "may", "jaune", "july", "augest", "september", "october", "novamber", "december"]
const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futuredate = new Date(2021, 1, 28, 6, 53, 0);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const minutes = futuredate.getMinutes();

let month = futuredate.getMonth();
month = months[month];
const date = futuredate.getDate();
const weekday = weekdays[futuredate.getDate()];

giveaway.textContent = `luner eclipce on ${weekday},${date},${month},${year} ${hours}:${minutes} am`
const futuretime = futuredate.getTime();
function getRemainingTime() {
    const today = new Date().getTime();
    const t = futuretime - today;
    const oneday = 24 * 60 * 60 * 1000;
    const onehour = 60 * 60 * 1000;
    const oneminute = 60 * 1000;
    let days = t / oneday
    days = Math.floor(days);
    let hours = Math.floor((t % oneday) / onehour);
    let minutes = Math.floor((t % onehour) / oneminute);
    let seconds = Math.floor((t % oneminute) / 1000);
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item;


    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
//end section 5 counter