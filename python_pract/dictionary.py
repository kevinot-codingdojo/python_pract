# bio = {
# 'profiles':[
# {}
# ]
# }name: "Kevin";age: "57";birthplace: "Ballard";language: "Norsk"
bio = {
  'my_profile': [
   { 'id': 'name is', 'content': 'Kevin Otnes'},
   { 'id': 'age is','content': 'Femtisju'},
   { 'id':  'birthplace is','content': 'Ballard'},
   { 'id': 'language','content':'Engelsk, Norsk'}
  ]
 }
for key, data in bio.items():
     #print data
     for value in data:
          print "My ", value["id"], ": ", value["content"]
          print "----"
