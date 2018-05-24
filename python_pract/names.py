students = [
     {'first_name':  'Vinnie', 'last_name' : 'Barbarino'},
     {'first_name' : 'John', 'last_name' : 'Connor'},
     {'first_name' : 'Mick', 'last_name' : 'Jagger'},
     {'first_name' : 'Arthur', 'last_name' : 'Fonzarelli'}
]

users = {
 'Students': [
     {'first_name':  'Vinnie', 'last_name' : 'Barbarino'},
     {'first_name' : 'John', 'last_name' : 'Connor'},
     {'first_name' : 'Mick', 'last_name' : 'Jagger'},
     {'first_name' : 'Arthur', 'last_name' : 'Fonzarelli'}
  ],
 'Instructors': [
     {'first_name' : 'Gandalf', 'last_name' : 'Grey'},
     {'first_name' : 'Gabe', 'last_name' : 'Kotter'}
  ]
 }

def show_students(arr):
    for student in students:
        print student['first_name'], student['last_name']

def show_all(users):
    for role in users:
        counter = 0
        print role
        for person in users[role]:
            counter += 1
            first_name = person['first_name'].upper()
            last_name = person['last_name'].upper()
            length = len(first_name) + len(last_name)
            print "{} - {} {} - {}".format(counter, first_name, last_name, length)

show_students(students)
show_all(users)
