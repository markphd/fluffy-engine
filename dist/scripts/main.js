$(document).ready(function(){$(".button-collapse").sideNav({onOpen:function(e){$(".main--content").removeClass("close--menu").addClass("open--menu")},onClose:function(e){$(".main--content").removeClass("open--menu").addClass("close--menu")}}),$("select").material_select();new Pikaday({field:$("#datepicker")[0],showDaysInNextAndPreviousMonths:!0,enableSelectionDaysInNextAndPreviousMonths:!0});$("#timepicker").timepicker({scrollDefault:"now"}),$(".edit--assignee").material_chip({autocompleteOptions:{data:{"Kyle Robinson":"dist/images/user-01.jpg","Rebecca Smith":"dist/images/user-02.jpg","Aaron Lloyd":"dist/images/user-03.jpg"},limit:1/0,minLength:1}}),$(".chips").on("chip.add",function(e,s){var a={"Kyle Robinson":"dist/images/user-01.jpg","Rebecca Smith":"dist/images/user-02.jpg","Aaron Lloyd":"dist/images/user-03.jpg"},t=s.tag;$(this).children(".chip").last().append('<img src="'+a[t]+'">')}),$("#label--group-select").on("change",function(e){var s=e.target.value;switch(s){case"Apple Design":$(".label--group").css({backgroundImage:"url(dist/images/team-01.jpg)"});break;case"Project Hackers":$(".label--group").css({backgroundImage:"url(dist/images/team-02.png)"});break;case"Evron":$(".label--group").css({backgroundImage:"url(dist/images/team-03.png)"});break;case"Google Dev Team":$(".label--group").css({backgroundImage:"url(dist/images/team-04.png)"});break;default:console.log("Good!")}})}),$(document).on("focus.autoExpand","textarea.autoExpand",function(){var e=this.value;this.value="",this.baseScrollHeight=this.scrollHeight,this.value=e}).on("input.autoExpand","textarea.autoExpand",function(){var e,s=0|this.getAttribute("data-min-rows");this.rows=s,console.log(this.scrollHeight,"scroll height"),console.log(this.baseScrollHeight,"base scroll height"),e=Math.ceil((this.scrollHeight-this.baseScrollHeight)/22),this.rows=s+e});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzaWRlTmF2Iiwib25PcGVuIiwiZWwiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib25DbG9zZSIsIm1hdGVyaWFsX3NlbGVjdCIsIlBpa2FkYXkiLCJmaWVsZCIsInNob3dEYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHMiLCJlbmFibGVTZWxlY3Rpb25EYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHMiLCJ0aW1lcGlja2VyIiwic2Nyb2xsRGVmYXVsdCIsIm1hdGVyaWFsX2NoaXAiLCJhdXRvY29tcGxldGVPcHRpb25zIiwiZGF0YSIsIkt5bGUgUm9iaW5zb24iLCJSZWJlY2NhIFNtaXRoIiwiQWFyb24gTGxveWQiLCJsaW1pdCIsIkluZmluaXR5IiwibWluTGVuZ3RoIiwib24iLCJlIiwiY2hpcCIsImtleSIsInRhZyIsInRoaXMiLCJjaGlsZHJlbiIsImxhc3QiLCJhcHBlbmQiLCJ0ZWFtIiwidGFyZ2V0IiwidmFsdWUiLCJjc3MiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb25zb2xlIiwibG9nIiwic2F2ZWRWYWx1ZSIsImJhc2VTY3JvbGxIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJyb3dzIiwibWluUm93cyIsImdldEF0dHJpYnV0ZSIsIk1hdGgiLCJjZWlsIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBR0MsVUFBV0MsTUFBTSxXQUNoQkYsRUFBRSxvQkFBb0JHLFNBQ2xCQyxPQUFRLFNBQVNDLEdBQ2ZMLEVBQUUsa0JBQWtCTSxZQUFZLGVBQWVDLFNBQVMsZUFFMURDLFFBQVMsU0FBU0gsR0FDaEJMLEVBQUUsa0JBQWtCTSxZQUFZLGNBQWNDLFNBQVMsa0JBSTdEUCxFQUFFLFVBQVVTLGlCQUVDLElBQUlDLFVBQVVDLE1BQU9YLEVBQUUsZUFBZSxHQUFJWSxpQ0FBaUMsRUFBTUMsNENBQTRDLEdBRTFJYixHQUFFLGVBQWVjLFlBQWFDLGNBQWlCLFFBRS9DZixFQUFFLG1CQUFtQmdCLGVBQ2pCQyxxQkFDRUMsTUFDRUMsZ0JBQWlCLDBCQUNqQkMsZ0JBQWlCLDBCQUNqQkMsY0FBZSwyQkFFakJDLE1BQU9DLEVBQUFBLEVBQ1BDLFVBQVcsS0FJakJ4QixFQUFFLFVBQVV5QixHQUFHLFdBQVksU0FBU0MsRUFBR0MsR0FDbkMsR0FBSVQsSUFDQUMsZ0JBQWlCLDBCQUNqQkMsZ0JBQWlCLDBCQUNqQkMsY0FBZSwyQkFFZk8sRUFBTUQsRUFBS0UsR0FFZjdCLEdBQUU4QixNQUFNQyxTQUFTLFNBQVNDLE9BQU9DLE9BQU8sYUFBZWYsRUFBS1UsR0FBTyxRQUd2RTVCLEVBQUUsd0JBQXdCeUIsR0FBRyxTQUFVLFNBQVNDLEdBQzVDLEdBQUlRLEdBQU9SLEVBQUVTLE9BQU9DLEtBRXBCLFFBQU9GLEdBQ0gsSUFBSyxlQUNEbEMsRUFBRSxpQkFBaUJxQyxLQUFNQyxnQkFBaUIsZ0NBQzFDLE1BQ0osS0FBSyxrQkFDRHRDLEVBQUUsaUJBQWlCcUMsS0FBTUMsZ0JBQWlCLGdDQUMxQyxNQUNKLEtBQUssUUFDRHRDLEVBQUUsaUJBQWlCcUMsS0FBTUMsZ0JBQWlCLGdDQUMxQyxNQUNKLEtBQUssa0JBQ0R0QyxFQUFFLGlCQUFpQnFDLEtBQU1DLGdCQUFpQixnQ0FDMUMsTUFDSixTQUNJQyxRQUFRQyxJQUFJLGNBSzVCeEMsRUFBR0MsVUFBV3dCLEdBQUcsbUJBQW9CLHNCQUF1QixXQUN4RCxHQUFJZ0IsR0FBYVgsS0FBS00sS0FDdEJOLE1BQUtNLE1BQVEsR0FDYk4sS0FBS1ksaUJBQW1CWixLQUFLYSxhQUM3QmIsS0FBS00sTUFBUUssSUFDZGhCLEdBQUcsbUJBQW9CLHNCQUF1QixXQUM3QyxHQUFvRG1CLEdBQWhEQyxFQUE2QyxFQUFuQ2YsS0FBS2dCLGFBQWEsZ0JBQ2hDaEIsTUFBS2MsS0FBT0MsRUFDWk4sUUFBUUMsSUFBSVYsS0FBS2EsYUFBYyxpQkFDL0JKLFFBQVFDLElBQUlWLEtBQUtZLGlCQUFrQixzQkFDbkNFLEVBQU9HLEtBQUtDLE1BQU1sQixLQUFLYSxhQUFlYixLQUFLWSxrQkFBb0IsSUFDL0RaLEtBQUtjLEtBQU9DLEVBQVVEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdih7XHJcbiAgICAgICAgb25PcGVuOiBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgJCgnLm1haW4tLWNvbnRlbnQnKS5yZW1vdmVDbGFzcyhcImNsb3NlLS1tZW51XCIpLmFkZENsYXNzKFwib3Blbi0tbWVudVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAkKCcubWFpbi0tY29udGVudCcpLnJlbW92ZUNsYXNzKFwib3Blbi0tbWVudVwiKS5hZGRDbGFzcyhcImNsb3NlLS1tZW51XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJ3NlbGVjdCcpLm1hdGVyaWFsX3NlbGVjdCgpO1xyXG5cclxuICAgIHZhciBwaWNrZXIgPSBuZXcgUGlrYWRheSh7IGZpZWxkOiAkKCcjZGF0ZXBpY2tlcicpWzBdLCBzaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzOiB0cnVlLCBlbmFibGVTZWxlY3Rpb25EYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHM6IHRydWUgfSk7XHJcblxyXG4gICAgJCgnI3RpbWVwaWNrZXInKS50aW1lcGlja2VyKHsgJ3Njcm9sbERlZmF1bHQnOiAnbm93JyB9KTtcclxuXHJcbiAgICAkKCcuZWRpdC0tYXNzaWduZWUnKS5tYXRlcmlhbF9jaGlwKHtcclxuICAgICAgICBhdXRvY29tcGxldGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICdLeWxlIFJvYmluc29uJzogJ2Rpc3QvaW1hZ2VzL3VzZXItMDEuanBnJyxcclxuICAgICAgICAgICAgJ1JlYmVjY2EgU21pdGgnOiAnZGlzdC9pbWFnZXMvdXNlci0wMi5qcGcnLFxyXG4gICAgICAgICAgICAnQWFyb24gTGxveWQnOiAnZGlzdC9pbWFnZXMvdXNlci0wMy5qcGcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGltaXQ6IEluZmluaXR5LFxyXG4gICAgICAgICAgbWluTGVuZ3RoOiAxXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNoaXBzJykub24oJ2NoaXAuYWRkJywgZnVuY3Rpb24oZSwgY2hpcCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICdLeWxlIFJvYmluc29uJzogJ2Rpc3QvaW1hZ2VzL3VzZXItMDEuanBnJyxcclxuICAgICAgICAgICAgJ1JlYmVjY2EgU21pdGgnOiAnZGlzdC9pbWFnZXMvdXNlci0wMi5qcGcnLFxyXG4gICAgICAgICAgICAnQWFyb24gTGxveWQnOiAnZGlzdC9pbWFnZXMvdXNlci0wMy5qcGcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgdmFyIGtleSA9IGNoaXAudGFnO1xyXG4gICAgICAgIC8vICQodGhpcykuY2hpbGRyZW4oJy5jaGlwJykubGFzdCgpLnRleHQoa2V5LnNwbGl0KCcgJylbMF0pOyAvLyB1bmNvbW1lbnQgaWYgZmlyc3QgbmFtZSBvbmx5XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmNoaXAnKS5sYXN0KCkuYXBwZW5kKCc8aW1nIHNyYz1cIicgKyBkYXRhW2tleV0gKyAnXCI+Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbGFiZWwtLWdyb3VwLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIHRlYW0gPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHRlYW0pIHtcclxuICAgICAgICAgICAgY2FzZSAnQXBwbGUgRGVzaWduJzpcclxuICAgICAgICAgICAgICAgICQoJy5sYWJlbC0tZ3JvdXAnKS5jc3MoeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGRpc3QvaW1hZ2VzL3RlYW0tMDEuanBnKVwifSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQcm9qZWN0IEhhY2tlcnMnOlxyXG4gICAgICAgICAgICAgICAgJCgnLmxhYmVsLS1ncm91cCcpLmNzcyh7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoZGlzdC9pbWFnZXMvdGVhbS0wMi5wbmcpXCJ9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0V2cm9uJzpcclxuICAgICAgICAgICAgICAgICQoJy5sYWJlbC0tZ3JvdXAnKS5jc3MoeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGRpc3QvaW1hZ2VzL3RlYW0tMDMucG5nKVwifSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdHb29nbGUgRGV2IFRlYW0nOlxyXG4gICAgICAgICAgICAgICAgJCgnLmxhYmVsLS1ncm91cCcpLmNzcyh7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoZGlzdC9pbWFnZXMvdGVhbS0wNC5wbmcpXCJ9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29vZCEnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pO1xyXG5cclxuJCggZG9jdW1lbnQgKS5vbignZm9jdXMuYXV0b0V4cGFuZCcsICd0ZXh0YXJlYS5hdXRvRXhwYW5kJywgZnVuY3Rpb24oKXtcclxuICAgIHZhciBzYXZlZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIHRoaXMuYmFzZVNjcm9sbEhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgdGhpcy52YWx1ZSA9IHNhdmVkVmFsdWU7XHJcbn0pLm9uKCdpbnB1dC5hdXRvRXhwYW5kJywgJ3RleHRhcmVhLmF1dG9FeHBhbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIG1pblJvd3MgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1taW4tcm93cycpfDAsIHJvd3M7XHJcbiAgICB0aGlzLnJvd3MgPSBtaW5Sb3dzO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zY3JvbGxIZWlnaHQsIFwic2Nyb2xsIGhlaWdodFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFzZVNjcm9sbEhlaWdodCwgXCJiYXNlIHNjcm9sbCBoZWlnaHRcIik7XHJcbiAgICByb3dzID0gTWF0aC5jZWlsKCh0aGlzLnNjcm9sbEhlaWdodCAtIHRoaXMuYmFzZVNjcm9sbEhlaWdodCkgLyAyMik7XHJcbiAgICB0aGlzLnJvd3MgPSBtaW5Sb3dzICsgcm93cztcclxufSk7Il19
