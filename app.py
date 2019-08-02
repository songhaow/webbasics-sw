from flask import Flask, render_template
app=Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/books")
def books():
   return render_template("books.html")

@app.route("/shoes")
def shoes():
   return render_template("shoes.html")

@app.route("/examples")
def examples():
    return render_template('examples.html')

# classes
@app.route("/infoclass01")
def infoclass01():
   return render_template("info-class-01.html")

@app.route("/infoclass02")
def infoclass02():
   return render_template("info-class-02.html")

@app.route("/infoclass03")
def infoclass03():
   return render_template("info-class-03.html")

@app.route("/infoclass04")
def infoclass04():
   return render_template("info-class-04.html")

@app.route("/infoclass05")
def infoclass05():
   return render_template("info-class-05.html")

@app.route("/infoclass06")
def infoclass06():
   return render_template("info-class-06.html")


@app.route("/infoclass07")
def infoclass07():
   return render_template("info-class-07.html")

@app.route("/infoclass08")
def infoclass08():
   return render_template("info-class-08.html")

@app.route("/infoclass09")
def infoclass09():
   return render_template("info-class-09.html")

@app.route("/infoclass10")
def infoclass10():
   return render_template("info-class-10.html")

@app.route("/infoclass11")
def infoclass011():
   return render_template("info-class-11.html")

@app.route("/infoclass12")
def infoclass12():
   return render_template("info-class-12.html")

@app.route("/infoclass13")
def infoclass13():
   return render_template("info-class-13.html")

@app.route("/infoclass14")
def infoclass14():
   return render_template("info-class-14.html")

@app.route("/infoclass15")
def infoclass15():
   return render_template("info-class-15.html")

@app.route("/infoclass16")
def infoclass16():
   return render_template("info-class-16.html")

@app.route("/infoclass17")
def infoclass17():
   return render_template("info-class-17.html")

@app.route("/infoclass18")
def infoclass18():
   return render_template("info-class-18.html")

@app.route("/infoclass19")
def infoclass19():
   return render_template("info-class-19.html")

@app.route("/infoclass20")
def infoclass20():
   return render_template("info-class-20.html")

@app.route("/infoclass21")
def infoclass021():
   return render_template("info-class-21.html")

@app.route("/infoclass22")
def infoclass22():
   return render_template("info-class-22.html")

@app.route("/infoclass23")
def infoclass23():
   return render_template("info-class-23.html")

@app.route("/infoclass24")
def infoclass24():
   return render_template("info-class-24.html")

@app.route("/infoclass25")
def infoclass25():
   return render_template("info-class-25.html")

@app.route("/infoclass26")
def infoclass26():
   return render_template("info-class-26.html")

@app.route("/infoclass27")
def infoclass27():
   return render_template("info-class-27.html")

if __name__ == "__main__":
   # app.run(host='0.0.0.0', port=5000, debug=True)
    app.run(debug=True)
