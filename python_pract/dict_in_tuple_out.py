my_dict = [
  {'name':"Speros",'phone': "(555) 555-5555",},
  {'name':"Michael",'phone': "(999) 999-9999",},
  {'name':"Jay",'phone': "(777) 777-7777"}
  ]

my_dict_tuples= [(i['name'],i['phone']) for i in my_dict]
print my_dict_tuples
