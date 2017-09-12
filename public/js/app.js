"use strict";var $addCommentButton=$(".add-comment-button"),$commentInput=$(".comment-input"),$input=$(".input"),$addEntryButton=$(".add-entry-button"),$newEntryInput=$("#new-entry"),$entryCheckbox=$(":checkbox"),entryId=null,inputContents=null;$entryCheckbox.change(function(t){$(t.target).attr("class").split(" ").forEach(function(t){t.match(/entry-id-*/)&&(entryId=t),$(".entry-update-form."+entryId).submit()})}),$newEntryInput.on("focus",function(){$addEntryButton.removeClass("hidden")}),$newEntryInput.on("blur",function(){""===$newEntryInput.val()&&$addEntryButton.addClass("hidden")}),$input.on("focus",function(t){inputContents=$(t.target).val()}),$input.on("blur",function(t){""!==$(t.target).val()&&inputContents!==$(t.target).val()&&$(t.target).attr("class").split(" ").forEach(function(t){t.match(/entry-id-*/)&&(entryId=t),$(".entry-update-form."+entryId).submit()})}),$addCommentButton.on("click",function(t){$(t.target).attr("class").split(" ").forEach(function(t){t.match(/entry-id-*/)&&(entryId=t)}),$(t.target).addClass("hidden"),$(".comment-form."+entryId).removeClass("hidden"),$commentInput.focus()}),$commentInput.on("blur",function(){""===$commentInput.val()&&($(".comment-form."+entryId).addClass("hidden"),$addCommentButton.removeClass("hidden"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkYWRkQ29tbWVudEJ1dHRvbiIsIiQiLCIkY29tbWVudElucHV0IiwiJGlucHV0IiwiJGFkZEVudHJ5QnV0dG9uIiwiZW50cnlJZCIsImlucHV0Q29udGVudHMiLCIkZW50cnlDaGVja2JveCIsImNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhdHRyIiwic3BsaXQiLCIkY2xhc3MiLCJhcnJheU9mQ2xhc3NlcyIsInN1Ym1pdCIsIiRuZXdFbnRyeUlucHV0Iiwib24iLCJyZW1vdmVDbGFzcyIsInZhbCIsImFkZENsYXNzIiwiJGNvbW1lbnRGb3JtIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxrQkFBb0JDLEVBQUUsdUJBQ3RCQyxjQUFnQkQsRUFBRSxrQkFEbEJELE9BQUFBLEVBQUFBLFVBQ0FFLGdCQUFrQkQsRUFBQSxxQkFDbEJFLGVBQVNGLEVBQWYsY0FDTUcsZUFBa0JILEVBQUUsYUFHMUJJLFFBQUEsS0FDQUMsY0FBQSxLQW1CQUMsZUFBQUMsT0FBQSxTQUFBQyxHQUd5QlIsRUFBRVEsRUFBRUMsUUFBUUMsS0FBSyxTQUFTQyxNQUFNLEtBRDFDSixRQUFPLFNBQUFLLEdBQ2RDLEVBQUFBLE1BQUFBLGdCQUNOQSxRQUFBQSxHQUVJYixFQUFBQSxzQkFBQUksU0FDRFUsYUFJSkMsZUFUREMsR0FBQSxRQUFBLFdBWUViLGdCQUFnQmMsWUFBWSxZQUM3QkYsZUFGREMsR0FBQSxPQUFBLFdBSzhCLEtBQXpCRCxlQUFlRyxPQURwQkgsZ0JBQWtCSSxTQUFPLFlBSXhCakIsT0FKRGMsR0FBQSxRQUFBLFNBQUFSLEdBT0VILGNBQWdCTCxFQUFFUSxFQUFFQyxRQUFRUyxRQUM3QmhCLE9BRkRjLEdBQUEsT0FBQSxTQUFBUixHQUsyQixLQUF0QlIsRUFBRVEsRUFBRUMsUUFBUVMsT0FBZ0JiLGdCQUFrQkwsRUFBRVEsRUFBRUMsUUFBUVMsT0FEOUNsQixFQUFBUSxFQUFPQyxRQUFBQyxLQUFBLFNBQUFDLE1BQUEsS0FDUE8sUUFBWixTQUE0QmIsR0FDdkJRLEVBQUFBLE1BQUFBLGdCQUNOQSxRQUFBQSxHQUVJYixFQUFBQSxzQkFBQUksU0FDRFUsYUFLTmYsa0JBWERpQixHQUFBLFFBQUEsU0FBQVIsR0FjeUJSLEVBQUVRLEVBQUVDLFFBQVFDLEtBQUssU0FBU0MsTUFBTSxLQUR6RFosUUFBcUIsU0FBUWEsR0FDckJDLEVBQUFBLE1BQUFBLGdCQUNOQSxRQUFBQSxLQUdHYixFQUFBUSxFQUFBQyxRQUFBVSxTQUFBLFVBSEhuQixFQUFBQSxpQkFBQUksU0FLWWUsWUFBUyxVQUNyQmxCLGNBQU1tQixVQUdQbkIsY0FYRGUsR0FBQSxPQUFBLFdBYzZCLEtBQXhCZixjQUFjaUIsUUFES2xCLEVBQUFBLGlCQUFNSSxTQUN6QkgsU0FBQSxVQUNERixrQkFBTXFCLFlBQWVwQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCAkYWRkQ29tbWVudEJ1dHRvbiA9ICQoJy5hZGQtY29tbWVudC1idXR0b24nKTtcbmNvbnN0ICRjb21tZW50SW5wdXQgPSAkKCcuY29tbWVudC1pbnB1dCcpO1xuY29uc3QgJGlucHV0ID0gJCgnLmlucHV0Jyk7XG5jb25zdCAkYWRkRW50cnlCdXR0b24gPSAkKCcuYWRkLWVudHJ5LWJ1dHRvbicpO1xuY29uc3QgJG5ld0VudHJ5SW5wdXQgPSAkKCcjbmV3LWVudHJ5Jyk7XG5jb25zdCAkZW50cnlDaGVja2JveCA9ICQoJzpjaGVja2JveCcpO1xuLy8gY29uc3QgJGxpc3ROYW1lSW5wdXQgPSAkKCcubGlzdC1uYW1lLWlucHV0Jyk7XG4vLyBjb25zdCAkbGlzdE5hbWVCdXR0b24gPSAkKCcuJylcbmxldCBlbnRyeUlkID0gbnVsbDtcbmxldCBpbnB1dENvbnRlbnRzID0gbnVsbDtcblxuLy8gJGxpc3ROYW1lSW5wdXQub24oJ2ZvY3VzJywoZSkgPT4ge1xuLy8gICBpbnB1dENvbnRlbnRzID0gJChlLnRhcmdldCkudmFsKCk7XG4vLyB9KTtcbi8vXG4vLyAkbGlzdE5hbWVJbnB1dC5vbignYmx1cicsKGUpID0+IHtcbi8vICAgaWYoJChlLnRhcmdldCkudmFsKCkgIT09ICcnICYmIGlucHV0Q29udGVudHMgIT09ICQoZS50YXJnZXQpLnZhbCgpKSB7XG4vLyAgICAgY29uc3QgYXJyYXlPZkNsYXNzZXMgPSAkKGUudGFyZ2V0KS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4vLyAgICAgYXJyYXlPZkNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbigkY2xhc3MpIHtcbi8vICAgICAgIGlmKCRjbGFzcy5tYXRjaCgvZW50cnktaWQtKi8pKSB7XG4vLyAgICAgICAgIGVudHJ5SWQgPSAkY2xhc3M7XG4vLyAgICAgICB9XG4vLyAgICAgICBjb25zdCAkZW50cnlGb3JtID0gJChgLmVudHJ5LXVwZGF0ZS1mb3JtLiR7ZW50cnlJZH1gKTtcbi8vICAgICAgICRlbnRyeUZvcm0uc3VibWl0KCk7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH0pO1xuXG4kZW50cnlDaGVja2JveC5jaGFuZ2UoKGUpID0+IHtcbiAgY29uc3QgYXJyYXlPZkNsYXNzZXMgPSAkKGUudGFyZ2V0KS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4gIGFycmF5T2ZDbGFzc2VzLmZvckVhY2goZnVuY3Rpb24oJGNsYXNzKSB7XG4gICAgaWYoJGNsYXNzLm1hdGNoKC9lbnRyeS1pZC0qLykpIHtcbiAgICAgIGVudHJ5SWQgPSAkY2xhc3M7XG4gICAgfVxuICAgIGNvbnN0ICRlbnRyeUZvcm0gPSAkKGAuZW50cnktdXBkYXRlLWZvcm0uJHtlbnRyeUlkfWApO1xuICAgICRlbnRyeUZvcm0uc3VibWl0KCk7XG4gIH0pO1xufSk7XG5cbiRuZXdFbnRyeUlucHV0Lm9uKCdmb2N1cycsKCkgPT4ge1xuICAkYWRkRW50cnlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xufSk7XG5cbiRuZXdFbnRyeUlucHV0Lm9uKCdibHVyJywoKSA9PiB7XG4gIGlmKCRuZXdFbnRyeUlucHV0LnZhbCgpID09PSAnJykge1xuICAgICRhZGRFbnRyeUJ1dHRvbi5hZGRDbGFzcygnaGlkZGVuJyk7XG4gIH1cbn0pO1xuXG4kaW5wdXQub24oJ2ZvY3VzJywoZSkgPT4ge1xuICBpbnB1dENvbnRlbnRzID0gJChlLnRhcmdldCkudmFsKCk7XG59KTtcblxuJGlucHV0Lm9uKCdibHVyJywoZSkgPT4ge1xuICBpZigkKGUudGFyZ2V0KS52YWwoKSAhPT0gJycgJiYgaW5wdXRDb250ZW50cyAhPT0gJChlLnRhcmdldCkudmFsKCkpIHtcbiAgICBjb25zdCBhcnJheU9mQ2xhc3NlcyA9ICQoZS50YXJnZXQpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICBhcnJheU9mQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uKCRjbGFzcykge1xuICAgICAgaWYoJGNsYXNzLm1hdGNoKC9lbnRyeS1pZC0qLykpIHtcbiAgICAgICAgZW50cnlJZCA9ICRjbGFzcztcbiAgICAgIH1cbiAgICAgIGNvbnN0ICRlbnRyeUZvcm0gPSAkKGAuZW50cnktdXBkYXRlLWZvcm0uJHtlbnRyeUlkfWApO1xuICAgICAgJGVudHJ5Rm9ybS5zdWJtaXQoKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbiRhZGRDb21tZW50QnV0dG9uLm9uKCdjbGljaycsKGUpID0+IHtcbiAgY29uc3QgYXJyYXlPZkNsYXNzZXMgPSAkKGUudGFyZ2V0KS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4gIGFycmF5T2ZDbGFzc2VzLmZvckVhY2goZnVuY3Rpb24oJGNsYXNzKSB7XG4gICAgaWYoJGNsYXNzLm1hdGNoKC9lbnRyeS1pZC0qLykpIHtcbiAgICAgIGVudHJ5SWQgPSAkY2xhc3M7XG4gICAgfVxuICB9KTtcbiAgJChlLnRhcmdldCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICBjb25zdCAkY29tbWVudEZvcm0gPSAkKGAuY29tbWVudC1mb3JtLiR7ZW50cnlJZH1gKTtcbiAgJGNvbW1lbnRGb3JtLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgJGNvbW1lbnRJbnB1dC5mb2N1cygpO1xufSk7XG5cbiRjb21tZW50SW5wdXQub24oJ2JsdXInLCgpID0+IHtcbiAgaWYoJGNvbW1lbnRJbnB1dC52YWwoKSA9PT0gJycpIHtcbiAgICBjb25zdCAkY29tbWVudEZvcm0gPSAkKGAuY29tbWVudC1mb3JtLiR7ZW50cnlJZH1gKTtcbiAgICAkY29tbWVudEZvcm0uYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRhZGRDb21tZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxufSk7XG4iXX0=
