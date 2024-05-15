<!DOCTYPE html>
<html>

<head>
    /* CSS is used to make the output looks good */
    <style>
        #sudo {
            border: 1px solid green;
            background-color: green;
            margin-bottom: 10px;
            color: white;
            font-weight: bold;
        }

        h1,
        h2 {
            text-align: center;
            color: green;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <h1>GeeksforGeeks</h1>
    <h2>DOM appendChild() Method</h2>
    <div id="sudo">
        The Good Website is learning for Computer Science is-
    </div>
    <button onclick="geeks()">Submit</button>
    <br />
    <div style="border: 3px solid green">
        <h1>GeeksforGeeks</h1>
        <h2>A computer science portal for geeks</h2>
    </div>
    <h2>DOM cloneNode() Method</h2>
    <button onclick="nClone()">
        Click here to clone the above elements.
    </button>
    <br />
    <h2>DOM hasAttributes() Method</h2>
    <p id="gfg">
        Click on the button to check if that
        body element has any attributes
    </p>
    <button type="button" onclick="hasAttr()">
        Submit
    </button>
    <br />
    <h2>DOM removeChild() Method</h2>
    <p>Sorting Algorithm</p>
    <ul id="listitem">
        <li>Insertion sort</li>
        <li>Merge sort</li>
        <li>Quick sort</li>
    </ul>
    <button onclick="Geeks()">
        Click Here!
    </button>
    <br />
    <h2>DOM getAttribute() Method</h2>
    <br />
    <button id="button" onclick="getAttr()">
        Submit
    </button>
    <p id="gfg1"></p>
    <br />
    <h2>DOM getElementsByTagName()</h2>
    <p>A computer science portal for geeks.</p>
    <button onclick="getElememt()">
        Try it
    </button>
    <h3>DOM isEqualNode() method .</h3>
    <!-- 3 div elements-->
    <div>GeeksforGeeks</div>
    <div>GfG</div>
    <div>GeeksforGeeks</div>
    <button onclick="isequal()">
        Check
    </button>
    <p id="result"></p>
    <script>
        function geeks() {
            var node = document.createElement("P");
            var t = document.createTextNode("GeeksforGeeks");
            node.appendChild(t);
            document.getElementById("sudo").appendChild(node);
        }
        function nClone() {
            // Accessing div attribute using a variable geek
            var geek = document.getElementsByTagName("DIV")[0];

            // Cloning geek variable into a variable named clone
            var clone = geek.cloneNode(true);

            // Adding our clone variable to end of the document
            document.body.appendChild(clone);
        }
        function hasAttr() {
            var s = document.body.hasAttributes();
            document.getElementById("gfg").innerHTML = s;
        }

        function Geeks() {
            var doc = document.getElementById("listitem");
            doc.removeChild(doc.childNodes[0]);
        }

        /* Using getElementById */
        function getAttr() {
            var rk = document.getElementById("button").getAttribute("onClick");
            document.getElementById("gfg1").innerHTML = rk;
        }

        /* Using getElementsByTagName */
        function getElement() {
            var doc = document.getElementsByTagName("p");
            doc[0].style.background = "green";
            doc[0].style.color = "white";
        }

        /* Cheacking the equality */
        function isequal() {
            var out = document.getElementById("result");
            var divele = document.getElementsByTagName("div");
            out.innerHTML +=
                "element 1 equals element 1: " +
                divele[0].isEqualNode(divele[0]) +
                "<br/>";
            out.innerHTML +=
                "element 1 equals element 2: " +
                divele[0].isEqualNode(divele[1]) +
                "<br/>";
            out.innerHTML +=
                "element 1 equals element 3: " +
                divele[0].isEqualNode(divele[2]) +
                "<br/>";
        }
    </script>
</body>

</html>
