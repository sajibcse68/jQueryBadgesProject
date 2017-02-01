$(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/sajibcse68.json',
    dataType: 'jsonp',
    success: function (resp) {
      console.log('>>>',resp.courses.completed);
      addCourses(resp.courses.completed);
      }
    });

  function addCourses(courses) {
    var $badges = $('#badges');
    courses.forEach(function(course) {
      var $course = $('<div />', {
        'class': 'course'
    }).appendTo($badges);

    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('<img />', {
      src: course.badge
    }).appendTo($course);

    $('<a />', {
      'class': 'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See Course'
    }).appendTo($course);
  })
  }
});
