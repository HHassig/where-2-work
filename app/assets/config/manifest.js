//= link_tree ../images
//= link_directory ../stylesheets .css
//= link_tree ../builds
// app/assets/config/manifest.js
// ...
//= link manifest.json
{
  "name": "App",
  "icons": [
   {
    "src": "\/android-icon-36x36.png",
    "sizes": "36x36",
    "type": "image\/png",
    "density": "0.75"
   },
   {
    "src": "\/android-icon-48x48.png",
    "sizes": "48x48",
    "type": "image\/png",
    "density": "1.0"
   },
   {
    "src": "\/android-icon-72x72.png",
    "sizes": "72x72",
    "type": "image\/png",
    "density": "1.5"
   },
   {
    "src": "\/android-icon-96x96.png",
    "sizes": "96x96",
    "type": "image\/png",
    "density": "2.0"
   },
   {
    "src": "\/android-icon-144x144.png",
    "sizes": "144x144",
    "type": "image\/png",
    "density": "3.0"
   },
   {
    "src": "\/android-icon-192x192.png",
    "sizes": "192x192",
    "type": "image\/png",
    "density": "4.0"
   }
  ]
 }

 {
  "background_color": "white",
  "description": "Find a reliable workspace anywhere in the world.",
  "display": "fullscreen",
  "name": "Where 2 Work",
  "icons": [
    <% files = Dir.entries(Rails.root.join("app/assets/images/icons/")).select {|f| !File.directory? f} %>
    <% files.each_with_index do |file, index| %>
      <% match = file.match(/.+-(?<size>\d{2,3}x\d{2,3}).png/) %>
      {
        "src": "<%= image_path "icons/#{file}" %>",
        "sizes": "<%= match && match[:size] %>",
        "type": "image/png"
      }<%= "," unless (files.size - 1) == index %>
    <% end %>
  ]
}
