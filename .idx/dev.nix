{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  packages = [
    pkgs.nodejs
    pkgs.nodePackages.firebase-tools
  ];
  idx.extensions = [
    "angular.ng-template"
  ];
  idx.workspace.onCreate = {
    npm-install = "npm install";
  };
  idx.previews = {
    enable = true;
    previews = [
      {
        command = ["npm" "run" "start" "--" "--port" "$PORT" "--host" "0.0.0.0" "--disable-host-check"];
        manager = "web";
        id = "web";
      }
      {
        manager = "ios";
        id = "ios";
      }
    ];
  };
}